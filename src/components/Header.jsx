
import logo from '../assets/Logo.png';
import { useState } from "react";
const Header = ({ onCityChange }) => {
  const [selectedCity, setSelectedCity] = useState('tehran');

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    onCityChange(city); 
  };
  return (
    <header className='flex flex-row justify-between px-6 pt-4 '>
    <section className="rt">
      <img src="./assets/log" alt="" />
      <select name="cities" id="cities" className="px-5 py-2 rounded-3xl" value={selectedCity}
          onChange={handleCityChange}>
<option value="none" disabled className="text-gray-100 outline-none focus:outline-none">
  انتخاب شهرها
</option>
<option value="tehran">تهران</option>
<option value="mashhad">مشهد</option>
<option value="esfahan">اصفهان</option>
<option value="shiraz">شیراز</option>
<option value="tabriz">تبریز</option>
<option value="ahvaz">اهواز</option>
<option value="karaj">کرج</option>
<option value="qom">قم</option>
<option value="kermanshah">کرمانشاه</option>
<option value="rasht">رشت</option>
<option value="urmia">ارومیه</option>
<option value="zanjan">زنجان</option>
<option value="kerman">کرمان</option>
<option value="yazd">یزد</option>
<option value="ardebil">اردبیل</option>
<option value="hamedan">همدان</option>
<option value="bandar-abbas">بندرعباس</option>
<option value="bushehr">بوشهر</option>
<option value="gorgan">گرگان</option>
<option value="sari">ساری</option>
<option value="sanandaj">سنندج</option>
<option value="khorramabad">خرم‌آباد</option>
<option value="kish">کیش</option>
<option value="qazvin">قزوین</option>
<option value="ilam">ایلام</option>
</select>

    </section>
    <section className="ri">
      <h1>Starweather</h1>
    </section>
   </header>
  );
};

export default Header;
