module.exports = function toReadable (number) {
  const array = ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
  'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',];

  if(number < 20) return array[number];
  
  let num = String(number).split('');
  console.log(array.length - 1)
  console.log(num.length);
}
