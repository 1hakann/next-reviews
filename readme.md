# rehber

# ilk olarak klasörümüzü oluşturduk ve package.json da name ve private değerlerimizi belirledik.

# Ardından "npm install next react react-dom" yapıyoruz. node modules ve package-lock.json gelecek.

# Tüm node modules geldi ancak package.json da yüklediğimiz üç paketin eklendiğini göreceksin.

# Şimdi app folder oluştur. Bunun içerisine layout.jsx ekle.

# ls node_modules/.bin dediğimizde projemizde yürütülebilecek komutları görürüz burada "next" var. öyleyse npx next --help diyip komutları incele. bunlardan birini yani dev i çalıştıralım. bu da şu şekilde "npx next dev" solda .next klasörü geldi.

# .gitignore ekleyelim: /.next/ /node_modules 

# ilk olarak 404 aldık. çünkü henüz bir sayfamız yok. app folder ın altında page.jsx oluşturuyoruz. export default function HomePage şeklinde. içerisinde return ile h1 döndürebiliriz.

# Homepage -> package.json da scripts bölümü ekleyelim obje içerisine dev, next-dev şeklinde tanımlayabiliriz. artık bir sayfamız oldu. bir şeyler yazdık. ardından layout umuza header ekleyebiliriz. çünkü tüm sayfalarımızda olacak. children ı da main içerisine alabiliriz. stil structure ı için faydalı olacak. tahmin edeceğiniz gibi main den sonra da footer ekleyelim.

# Typescript -> next projenizi typescript ile yazmak istiyorsanız. yapacaklarınız şunlar: page.tsx ve layout tsx olacak. ardından npm run dev diyelim. her şey otomatik olarak gerçekleşecek.

# layout.tsx de LayoutProps interface ini tanımlıyoruz. 

# Page Routes -> şimdi app altında reviews folder ı oluşturuyoruz. ve bunun içerisinde de page.jsx ekledik. diğer pageden buraya kopyalayabilirsin. adını ReviewsPage koyduk artık /reviews buradaki page.jsx oluyor. aynı şekilde altında bir konuda sluglı bir folder oluştur içerik girdik.

# Add More Pages -> Aynı şekilde başka bir içerik ekle.
