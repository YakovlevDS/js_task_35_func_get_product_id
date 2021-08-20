// ? Task:Напиши функцию getProductId, которая принимает строку представляющую URL-адрес страницы этого продукта в вашем интернет-магазине и возвращает идентификатор продукта из строки.

// Все URL-адреса имеют одинаковый формат: сначала домен exampleshop.com, затем название продукта, разделенное тире (-), затем буква p, обозначающая начало идентификатора продукта, затем фактический идентификатор, (без ограничения по длине), и, наконец, 8-значное представление даты добавления продукта, за которой следует .html.

//   Примеры:
// exampleshop.com/fancy-coffee-cup-p-90764-12052019.html >> productID is 90764

// exampleshop.com/dry-water-just-add-water-to-get-water-p-147-24122017.html >> productID is 147

// exampleshop.com/public-toilet-proximity-radar-p-942312798-01012020.html >> productID is 942312798


// Примечания:

// Название продукта также может содержать букву p или цифры.
// Ваш код должен возвращать идентификатор продукта в виде строки.
// Все URL-адреса будут действительными URL-адресами продуктов, и все они будут соответствовать указанной выше структуре.

// Solution 1


function getProductId(url) {

  let nUrl = url
    .slice(0, -14)
    .split("")
    .reverse();
  const ind = nUrl.indexOf("-");
  nUrl = nUrl
    .slice(0, ind)
    .reverse()
    .join("");


  return nUrl;
}
  console.log(getProductId('exampleshop.com/public-toilet-proximity-radar-p-942312798-01012020.html'));

// ! Explanation: 
