function createHelloWorld() {
    return function() {
      return "Hello World";
    };
  }
  

  const f = createHelloWorld();
  console.log(f());
  console.log(f({}, null, 42)); //burada parametre versemde sonuç değişmiyor

  //Same Result =// "Hello World"

//?LESSON CLOURES
function createCounter() {
    let value = 0;

    function increment() {
        return ++value;
    }

    return {
        increment: increment
    }
}

const counter1 = createCounter();
const counter2 = createCounter()
console.log(counter1.increment())
console.log(counter2.increment())

// Closures (Kapanışlar), JavaScript'teki en güçlü ve ilginç kavramlardan biridir. Closures, bir fonksiyonun kendi lexical scope'u (sözcüksel kapsamı) dışındaki değişkenlere erişebilmesini ve bu değişkenleri "hatırlamasını" sağlar. Bu, JavaScript'teki fonksiyonel programlama ve asenkron işlemler için temel bir yapı taşıdır.

// JavaScript'te, bir fonksiyon içinde başka bir fonksiyon tanımlandığında, içteki fonksiyon dıştaki fonksiyonun değişkenlerine erişebilir. Dıştaki fonksiyon çalıştırılıp tamamlandıktan sonra bile, içteki fonksiyon dıştaki fonksiyonun değişkenlerine erişmeye devam eder. İşte bu duruma closure denir.

// function outerFunction() {
//     let outerVariable = "I'm outside!";
  
//     function innerFunction() {
//       console.log(outerVariable); // Dıştaki değişkene erişim
//     }
  
//     return innerFunction;
//   }
  
//   const closureExample = outerFunction();
//   closureExample(); // "I'm outside!

// Veri Gizleme (Encapsulation):

//     Closure'lar, dıştaki değişkenleri gizleyerek sadece belirli bir fonksiyon üzerinden erişime izin verir. Bu, özellikle modül deseninde kullanılır.

// Callback Fonksiyonları:
// Asenkron işlemlerde, callback fonksiyonları closure'lar sayesinde dıştaki değişkenlere erişebilir.
// setTimeout(function() {
//     console.log("Hello after 2 seconds!");
//   }, 2000);

// Fonksiyon Fabrikaları:

//     Closure'lar, dinamik olarak fonksiyonlar oluşturmak için kullanılabilir.
// function createMultiplier(multiplier) {
//     return function(number) {
//       return number * multiplier;
//     };
//   }
  
//   const double = createMultiplier(2);
//   console.log(double(5)); // 10

//!Attention
// Bellek Tüketimi:
//     Closure'lar, dıştaki değişkenleri hatırladığı için bu değişkenler bellekten silinmez. Bu, gereksiz bellek tüketimine neden olabilir.