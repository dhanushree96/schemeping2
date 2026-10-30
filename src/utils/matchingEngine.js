import { schemes } from '../data/mockData';

export const matchSchemes = (userProfile, familyMembers = []) => {
  const allRecommended = [];

  // Match for individual
  const individualMatches = schemes.filter(scheme => {
    return checkEligibility(scheme, userProfile);
  }).map(scheme => ({ ...scheme, matchedFor: 'Self' }));

  allRecommended.push(...individualMatches);

  // Match for family members
  familyMembers.forEach(member => {
    const memberMatches = schemes.filter(scheme => {
      return checkEligibility(scheme, member);
    }).map(scheme => ({ ...scheme, matchedFor: member.name }));
    
    allRecommended.push(...memberMatches);
  });

  // Remove duplicates and sort by matchScore (Mock score for now)
  const uniqueMatches = Array.from(new Set(allRecommended.map(s => s.id)))
    .map(id => allRecommended.find(s => s.id === id));

  return uniqueMatches;
};

const checkEligibility = (scheme, profile) => {
  const { eligibility } = scheme;
  
  // Basic Rule Engine
  if (eligibility.incomeLimit && profile.income > eligibility.incomeLimit) return false;
  if (eligibility.occupation && !eligibility.occupation.includes(profile.occupation)) return false;
  if (eligibility.gender && !eligibility.gender.includes(profile.gender)) return false;
  if (eligibility.rural !== undefined && profile.isRural !== eligibility.rural) return false;
  if (eligibility.isStudent && !profile.isStudent) return false;
  if (eligibility.caste && !eligibility.caste.includes(profile.caste)) return false;

  return true;
};
