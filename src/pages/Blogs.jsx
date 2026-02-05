import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Blogs()


{
  const [view,setView]=useState("grid");
    return(
    <>
    
    <section className="mt-10 bg-dark p-5">
    <div >
        <div>
            <div className=" orange-bg  border-orange bg-opacity-25 p-2 rounded-5 orange-text w-25 m-auto ">مدواتنا <i className="fa-solid fa-book"></i></div>
            <div className="fs-1 fw-bold text-white">اكتشف <span className="orange-text">مقالاتنا</span></div>
            <p className="text-dark-emphasis">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </div>
        <div className="d-flex bg-dark border-bottom position-sticky">
        <div className=" w-100 p-2 d-flex gap-2">
       <Link to="/blogs/Tools">
             <button className="bg-orange text-white p-2 rounded-3 w-35"> معدات</button></Link>
            <Link to="/blogs/techniqe">
              <button  className="bg-orange text-white p-2 rounded-3 w-35">تقنيات </button>
              </Link>
              <Link to="/blogs/NaturalView">
              <button className="bg-orange text-white p-2 rounded-3 w-35">مناظر طبيعية</button>
              </Link>
              <Link to="/blogs/portrait">
            <button className="bg-orange text-white p-2 rounded-3 w-35">بورتريه</button></Link>
            <Link to="/blogs/light">
             <button className="bg-orange text-white p-2 rounded-3 w-35">إضاءة</button></Link>
             <Link to="/blogs/allArticles">
            <button className="bg-orange text-white p-2 rounded-3 w-35 hover:border-orange">جميع المقالات</button>
            </Link>
        </div>
        <div className=""><input type="text" placeholder="ابحث في المقالات..." className="dark rounded-3 border-grey p-2 d-flex align-items-center" /></div>
        </div>
        <div className="mt-5">
            <div className="d-flex justify-content-between">
              <div className="dark bg-opacity-50 border-grey rounded-3">
                <button onClick={() => setView("grid")} className="dark text-dark-emphasis bg-opacity-50 p-2 rounded-3 "> <i className="fa-solid fa-grip"></i></button> 
                 <button onClick={() => setView("list")} className="dark text-dark-emphasis bg-opacity-50 p-2 rounded-3 "> <i className="fa-solid fa-list"></i></button> 
               </div>
                <p className="text-dark-emphasis">عرض <span className="text-white fw-bold">28</span>مقاله</p>
            </div>
            <div className="container-fluid bg-dark">
                <div className={view==="grid"? "row" :"d-flex flex-column gap-4"}>
                  
                               
                     <div className="col-4 border-grey  rounded-2 text-end mt-5">
                        <div className="text-white bg-black bg-opacity-25 rounded-5 m-auto p-2 w-35 text-center card">مناظر طبيعيه</div>
                        <img src="./img/photo-1500835556837-99ac94a94552.jfif" className="w-100 mt-5 img-2" alt=""/>
                        <p className="text-dark-emphasis mt-2">  دقايق للقراءه  25 يناير 2026  </p>
                        <h4 className="text-white fw-bold">اسرار المناظر الطبيعيه</h4>
                        <p className="text-secondary border-bottom p-3">اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.</p>
                       <div className="d-flex justify-content-between">
                        <div className=" rounded-circle orange-bg my-auto p-1">
                       <i className="fa-solid fa-arrow-left fs-6 orange-text"></i>
                        </div>
                        <div className="d-flex">
<div className="">
<p className="mb-0 text-white">جمال محمد</p>
<p className="mt-0 text-dark-emphasis">فنان بصري</p>
</div>
<div className="w-50">
    <img src="./img/photo-1472099645785-5658abf4ff4e.jfif" className="w-50 rounded-circle ms-0" alt="" />
</div>
</div>
                       </div>
                    </div>
                    <div className="col-4 border-grey  rounded-2 text-end mt-5">
                        <div className="text-white bg-black bg-opacity-25 rounded-5 m-auto p-2 w-35 text-center card"> الاضاءه</div>
                        <img src="/img/light.jfif" className="w-100 mt-5 img-2" alt=""/>
                        <p className="text-dark-emphasis mt-2">  دقايق للقراءه  25 يناير 2026  </p>
                        <h4 className="text-white fw-bold">اسرار الاضاءه</h4>
                        <p className="text-secondary border-bottom p-3">اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.</p>
                       <div className="d-flex justify-content-between">
                        <div className=" rounded-circle orange-bg my-auto p-1">
                       <i className="fa-solid fa-arrow-left fs-6 orange-text"></i>
                        </div>
                        <div className="d-flex">
<div className="">
<p className="mb-0 text-white">جمال محمد</p>
<p className="mt-0 text-dark-emphasis">فنان بصري</p>
</div>
<div className="w-50">
    <img src="/img/photo-1472099645785-5658abf4ff4e.jfif" className="w-50 rounded-circle ms-0" alt="" />
</div>
</div>
                       </div>
                    </div>
                     <div className="col-4 border-grey  rounded-2 text-end mt-5">
                        <div className="text-white bg-black bg-opacity-25 rounded-5 m-auto p-2 w-35 text-center card"> بورتريه</div>
                        <img src="/img/port.jfif" className="w-100 mt-5 img-2" alt=""/>
                        <p className="text-dark-emphasis mt-2">  دقايق للقراءه  25 يناير 2026  </p>
                        <h4 className="text-white fw-bold">اسرار تصوير بورتريه</h4>
                        <p className="text-secondary border-bottom p-3">اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.</p>
                       <div className="d-flex justify-content-between">
                        <div className=" rounded-circle orange-bg my-auto p-1">
                       <i className="fa-solid fa-arrow-left fs-6 orange-text"></i>
                        </div>
                        <div className="d-flex">
<div className="">
<p className="mb-0 text-white">جمال محمد</p>
<p className="mt-0 text-dark-emphasis">فنان بصري</p>
</div>
<div className="w-50">
    <img src="/img/photo-1472099645785-5658abf4ff4e.jfif" className="w-50 rounded-circle ms-0" alt="" />
</div>
</div>
                       </div>
                    </div>
                    <div className="col-4 border-grey  rounded-2 text-end mt-5">
                        <div className="text-white bg-black bg-opacity-25 rounded-5 m-auto p-2 w-35 text-center card"> تقنيات</div>
                        <img src="/img/tech.jfif" className="w-100 mt-5 img-2" alt=""/>
                        <p className="text-dark-emphasis mt-2">  دقايق للقراءه  25 يناير 2026  </p>
                        <h4 className="text-white fw-bold">اسرار التقنيه</h4>
                        <p className="text-secondary border-bottom p-3">اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.</p>
                       <div className="d-flex justify-content-between">
                        <div className=" rounded-circle orange-bg my-auto p-1">
                       <i className="fa-solid fa-arrow-left fs-6 orange-text"></i>
                        </div>
                        <div className="d-flex">
<div className="">
<p className="mb-0 text-white">جمال محمد</p>
<p className="mt-0 text-dark-emphasis">فنان بصري</p>
</div>
<div className="w-50">
    <img src="/img/photo-1472099645785-5658abf4ff4e.jfif" className="w-50 rounded-circle ms-0" alt="" />
</div>
</div>
                       </div>
                    </div>
                     <div className="col-4 border-grey  rounded-2 text-end mt-5">
                        <div className="text-white bg-black bg-opacity-25 rounded-5 m-auto p-2 w-35 text-center card"> معدات</div>
                        <img src="/img/tools.jfif" className="w-100 mt-5 img-2" alt=""/>
                        <p className="text-dark-emphasis mt-2">  دقايق للقراءه  25 يناير 2026  </p>
                        <h4 className="text-white fw-bold">اسرار  المعدات</h4>
                        <p className="text-secondary border-bottom p-3">اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.</p>
                       <div className="d-flex justify-content-between">
                        <div className=" rounded-circle orange-bg my-auto p-1">
                       <i className="fa-solid fa-arrow-left fs-6 orange-text"></i>
                        </div>
                        <div className="d-flex">
<div className="">
<p className="mb-0 text-white">جمال محمد</p>
<p className="mt-0 text-dark-emphasis">فنان بصري</p>
</div>
<div className="w-50">
    <img src="/img/photo-1472099645785-5658abf4ff4e.jfif" className="w-50 rounded-circle ms-0" alt="" />
</div>
</div>
                       </div>
                    </div>
                </div>
            </div>
            
        </div>
                  
    </div>
    </section>
   
    </>

)}

export default Blogs;