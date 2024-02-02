const valueDelChina = 100;
const valueDelChile = 250;
const valueDelAustralia = 170;
const valueDelJamaica = 120;
  
function getShippingCost(country) {
  switch (country) {
    case 'China': return`Shipping to ${country} will cost ${valueDelChina} credits`;
    case 'Chile': return`Shipping to ${country} will cost ${valueDelChile} credits`;
    case 'Australia': return`Shipping to ${country} will cost ${valueDelAustralia} credits`;
    case 'Jamaica': return`Shipping to ${country} will cost ${valueDelJamaica} credits`;
    default: return ('Sorry, there is no delivery to your country');
  }
        
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));

