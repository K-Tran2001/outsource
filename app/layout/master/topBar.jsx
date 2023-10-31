import React from "react";
import langs from 'langs'
import * as countryFlags from 'country-flags-svg'
import Link from "next/link";
import Image from "next/image";

export default function MasterTopBar() {
  const [selectedLanguage,setSelectedlanguage] = React.useState({code:"vi",name:"Vietnamese",flag:"	https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"})//JSON.parse(localStorage.getItem("lang"))||
  const [languages ,setLanguages] = React.useState([])
  const [expand,setExpand] = React.useState(false)
  const changeLanguage =(newLang)=>{
    document.documentElement.lang = newLang.code; 
    //window.location.href =`/${newLang.code}/folders`
    //localStorage.setItem("lang",JSON.stringify(newLang))
    localStorage.setItem("prefered_local",newLang.code)
  }
  const getAlllanguage = ()=>{
    const languages = langs.all().map((language) => {
    const languageCode = language["1"];
    const languageName = language.name;
    const countryCode = language["1"].toLowerCase();
    const flagUrl = countryFlags?.findFlagUrlByNationality(languageName);
    
    return {
        code: languageCode,
        name: languageName,
        flag: flagUrl,
    };
    });
    //setLanguages(languages)
    setLanguages(languages.filter((item)=>item.flag!=""))
  }
  const getLanguageByCode = (code)=>{
    const language = langs.all().find(lang=>lang["1"]==code) 
    const languageCode = language["1"];
    const languageName = language.name;
    const countryCode = language["1"].toLowerCase();
    const flagUrl = countryFlags?.findFlagUrlByNationality(languageName);
    const currentLang = {
        code: languageCode,
        name: languageName,
        flag: flagUrl,
    }
    setSelectedlanguage(currentLang)
    console.log("curr",currentLang);
    //localStorage.setItem("lang",JSON.stringify(currentLang))
    localStorage.setItem("prefered_local",currentLang.code)
  }
  React.useEffect(()=>{
    //setSelectedlanguage(JSON.parse(localStorage.getItem("lang")))
    getAlllanguage()
    getLanguageByCode(localStorage.getItem("prefered_local")||"vi")
  },[])

  return (
    <div className="sticky top-0 flex h-16 shrink-0 items-center gap-x-4 border-gray-200 bg-gray-500 ">
        <div className="flex"></div>
        <div className=" relative">

          <div id="states-button"  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" onClick={()=>setExpand(!expand)}>
              <Image src={selectedLanguage.flag} width={300} height={300}  className="w-4 h-4 mr-2" alt="Vietnam free icon"/>
              {selectedLanguage?.name}
          </div>
          {expand&&<div className="absolute mt-1">
            <div  className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 max-h-[20rem] overflow-x-hidden has-scrollbar">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
                  {
                    languages?.map((lang)=>(
                        <li key={Math.random()} className="px-4">
                            <Link href={`/${lang.code}/folders`}  onClick={()=>{changeLanguage(lang);setSelectedlanguage(lang)}}>
                                <div className="inline-flex items-center">
                                <Image src={lang.flag} width={300} height={300}  className="w-4 h-4 mr-2" alt="Vietnam free icon"/>              
                                    {lang.name}
                                </div>
                            </Link>
                        </li>
                    ))
                  }
              </ul>
            </div>
          </div>}
        </div>
    </div>
  );
}
