let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function generateDomains(pronouns, adjectives, nouns) {
  let domains = [];
  for (let p of pronouns) {
    for (let a of adjectives) {
      for (let n of nouns) {
        domains.push(p + a + n + ".com");
      }
    }
  }
  return domains;
}

let domainList = generateDomains(pronoun, adj, noun);
