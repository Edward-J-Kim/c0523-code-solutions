select "addresses"."line1" as "address",
       "cities"."name" as "City",
       "addresses"."district" as "district",
       "countries"."name" as "Country"
  from "addresses"
  join "cities" using ("cityId")
  join "countries" using ("countryId")
