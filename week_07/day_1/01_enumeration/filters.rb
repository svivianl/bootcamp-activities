
# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(id)
  found = nil
  found = @candidates.find { |candidate| candidate.fetch(:id) == id }
  # found = @candidates.select { |candidate| candidate.fetch(:id) == id }
  # found && found = found[0]
end

def experienced?(candidate)
# Returns true if the candidate has 2 years of experience or more
# Returns false otherwise
  candidate[:years_of_experience] >= 2
end

def qualified_candidates(candidates)
  found = @candidates.select { |candidate| candidate_qualifies? candidate }
end

# More methods will go below
def candidate_qualifies?(candidate)
  checkLanguages = ['Ruby', 'Python']

  if candidate[:languages].select{ |language| checkLanguages.include? language }
    language = true
  else
    language = false
  end

  experienced = experienced? candidate


  experienced &&
  candidate[:github_points] >= 100 &&
  language &&
  candidate[:date_applied] > Date.today - 15 &&
  candidate[:age] > 17
end

def ordered_by_qualifications(candidates)
  sorted = candidates.sort_by { |candidate| [~candidate[:years_of_experience], ~candidate[:github_points]] }
end
