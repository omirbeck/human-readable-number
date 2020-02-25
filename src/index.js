module.exports = function toReadable (number) {
  const zeroteen = ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
  'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',];
  
  const dozens = ['zero','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  
  const hundred = 'hundred';
  
  let rezult = '';

  /** Условие для чисел от 0 до 19 **/
  if(number < 20) {
    rezult = zeroteen[number]; 
  }
  

  /** Функция для чисел от 20 до 99 **/
  function funcdoz(number) {
  if(20 <= number && number < 100) {
    let num = String(number).split(''); // 
    let one = zeroteen[Number(num[1])]
    let ten = dozens[Number(num[0])];
    
    if (Number(num[1]) == 0) {
      rezult = ten;
      return rezult;
    } else {
      rezult = ten + ' ' + one;
      return rezult;
    }
    }
  }
  
  funcdoz(number);
  
  /** Проверка для чисел от 100 дo 999  **/ 
  if(number >= 100 && number < 1000) {
    let num = String(number).split('');
    let one = zeroteen[Number(num[0])]
    let tens = Number(num[1] + num[2]);

    // Если только сотни 100, 200, 300
    if (Number(num[1]) == 0 && Number(num[2]) == 0) {
      rezult = one + ' ' + hundred;
    } // 101, 210, 515
      else if (tens < 20) {
        rezult = one + ' ' + hundred + ' ' + zeroteen[tens];
      } // 120, 247, 765
        else if (20 <= tens){
          rezult = one + ' ' + hundred + ' ' + funcdoz(tens);
        }
  }
  
  return rezult
}
