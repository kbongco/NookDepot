class Material < ApplicationRecord
  belongs_to :listings
  has_and_belongs_to_many :assemblies 
end
