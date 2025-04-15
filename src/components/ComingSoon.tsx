

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white text-black p-6">
      {/* العنوان */}
      <div className="text-center mt-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          We're Brewing Something Great!
        </h1>
        <p className="text-lg md:text-xl text-gray-600">Coming Soon — ikcoffee.sa</p>
      </div>

      {/* الصورة */}
      <div className="w-full max-w-4xl my-10">
        <img
          src="/coming-soon-ik.png" // عدّل حسب اسم الملف داخل public
          alt="IK Coming Soon Illustration"
          className="w-full object-contain"
        />
      </div>

      {/* الأيقونات */}
      <div className="flex gap-6 mb-4">
  <a
    href="https://www.instagram.com/ikcoffee.sa?igsh=MXhnZmlhaXVyM2I2ZA=="
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/Platform=Instagram, Color=Black.png" alt="Instagram" className="w-6 h-6" />
  </a>
</div>


      {/* التذييل */}
      <p className="text-sm text-gray-400 mb-2">صُمّم بواسطة <a href="https://rmsr.sa" className="underline">rmsr.sa</a></p>
    </div>
  );
};

export default ComingSoon;
