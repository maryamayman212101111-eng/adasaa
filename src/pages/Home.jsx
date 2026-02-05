import Blogs from "./Blogs";

function Home()
{
    return(
    <>
     <section className="mt-10">
    <div>
        <div className="bg-dark p-5">
        <div>
            <div className=" orange-bg  border-orange bg-opacity-25 p-2 rounded-5 text-white w-25 m-auto "> مرحبا بك في عدسه</div>
            <div className="fs-1 fw-bold text-secondary">اكتشف <span className="orange-text">في </span>التصوير الفوتوغرافي</div>
            <p className="text-dark-emphasis">   انغمس في اسرار المحترفين ونصايح عمليه للتطويرمهاراتك في التصوير</p>
        </div>
        <div className="d-flex mt-3 justify-content-center gap-1">
          
     <button onClick={Blogs} className="bg-orange text-white p-2 w-15 rounded-5 ">
            <i className="fa-solid fa-arrow-left text-white"></i> 
            
استكشف المقالات

        </button>
       

        <div className="bg-transparent border-grey text-white p-2 rounded-5 w-35 ">
اعرف المزيد
        </div>
        </div>
<div className=" d-flex justify-content-center gap-2 mt-5">
    <div className="text-center border-grey dark p-4 w-15 rounded-3">
        <i className="fa-solid fa-book orange-text"></i>
        <p className="fw-bold orange-text fs-2">+50</p>
        <p className="text-secondary-emphasis">مقاله</p>
    </div>
    <div className="text-center border-grey dark p-4 w-15 rounded-3">
        <i className="fa-solid fa-users orange-text"></i>
        <p className="fw-bold orange-text fs-2">+100 الف</p>
        <p className="text-secondary-emphasis">قاري</p>
    </div>
    <div className="text-center border-grey dark p-4 w-15 rounded-3">
        <i className="fa-solid fa-fa-pen-nib orange-text"></i>
        <p className="fw-bold orange-text fs-2">4</p>
        <p className="text-secondary-emphasis">تصنيفات</p>
    </div>
    <div className="text-center border-grey dark p-4 w-15 rounded-3">
        <i className="fa-solid fa-book orange-text"></i>
        <p className="fw-bold orange-text fs-2">6</p>
        <p className="text-secondary-emphasis">كاتب</p>
    </div>
    </div>
</div>
<div className="bg-black p-5">
    <div className="">
        <div className="d-flex justify-content-end mb-2">
        <div className="bg-dark orange-text rounded-5 text-center w-15 p-2">مميز</div></div>
        <div className="d-flex justify-content-between">
           <div> <button className="orange-bg p-2 my-auto rounded-5 text-white w-15 text-center">اعرض الكل </button></div> 
        <div>
           
        <h2 className="fw-bold text-white fs-1">مقالات مختاره</h2>
        <p className="text-secondary-emphasis">محتوي منتقي لبدا رحله تعلمك</p>
      </div>  
      
      </div>
    </div>
    <div className="myCard p-4 border-grey rounded-3 mt-4">
    <div className="d-flex">
        
        <div className="w-50"> 
            <div className="d-flex mx-2 justify-content-end me-2 mb-3 ">
             <div className="orange-bg orange-text p-2 border-orange rounded-5 w-10">اضاءه</div>
            <p className="text-secondary-emphasis ms-2"> 8 دقايق للقراءه <i className="fa-solid fa-clock"></i></p>
        </div>
        <h2 className="fw-bold fs-1 text-white">اتقان تصوير الساعه الذهبيه: دليل شامل</h2>
        <p className="text-secondary-emphasis">تعلم كيفيه التقاط صور مذهله خلال الساعه الذهبيه مع نصائح احترافيه حول الاضاءه و التكوين</p>
        </div>
<div className="w-50">
    <img src="./img/photo-1500835556837-99ac94a94552.jfif" className="w-100" alt="" />
</div> 
    </div>

</div>
    <div className="myCard p-4 border-grey rounded-3 mt-4">
    <div className="d-flex">
        
        <div className="w-50"> 
            <div className="d-flex mx-2 justify-content-end me-2 mb-3 ">
             <div className="orange-bg orange-text p-2 border-orange rounded-5 w-10">اضاءه</div>
            <p className="text-secondary-emphasis ms-2"> 8 دقايق للقراءه <i className="fa-solid fa-clock"></i></p>
        </div>
        <h2 className="fw-bold fs-1 text-white">اتقان تصوير الساعه الذهبيه: دليل شامل</h2>
        <p className="text-secondary-emphasis">تعلم كيفيه التقاط صور مذهله خلال الساعه الذهبيه مع نصائح احترافيه حول الاضاءه و التكوين</p>
        </div>
<div className="w-50">
    <img src="./img/photo-1500835556837-99ac94a94552.jfif" className="w-100" alt="" />
</div> 
    </div>

</div>
    <div className="myCard p-4 border-grey rounded-3 mt-4">
    <div className="d-flex">
        
        <div className="w-50"> 
            <div className="d-flex mx-2 justify-content-end me-2 mb-3 ">
             <div className="orange-bg orange-text p-2 border-orange rounded-5 w-10">اضاءه</div>
            <p className="text-secondary-emphasis ms-2"> 8 دقايق للقراءه <i className="fa-solid fa-clock"></i></p>
        </div>
        <h2 className="fw-bold fs-1 text-white">اتقان تصوير الساعه الذهبيه: دليل شامل</h2>
        <p className="text-secondary-emphasis">تعلم كيفيه التقاط صور مذهله خلال الساعه الذهبيه مع نصائح احترافيه حول الاضاءه و التكوين</p>
        </div>
<div className="w-50">
    <img src="./img/photo-1500835556837-99ac94a94552.jfif" className="w-100" alt="" />
</div> 
    </div>

</div>
</div>

<div className="p-5 bg-dark">
     <div className="">
            <div className=" orange-bg  border-orange bg-opacity-25 p-2 rounded-5 orange-text w-25 m-auto ">التصنيفات <i className="fa-solid fa-book"></i></div>
            <div className="fs-1 fw-bold">اكتشف حسب الموضوع</div>
            <p className="text-dark-emphasis">اعثر علي محتوي مصمم حسب اهتمامك</p>
        </div>

<div className="container">
<div className="row p-5 g-1">
    <div className=" dark border-secondary-subtle p-3 rounded-3 text-start col-3 text-center">
<div className="orange-bg border-orange p-2 rounded-3 orange-text w-5 m-auto"><i className="fa-solid fa-sun"></i></div>
<h3 className="text-white fw-bold">اضاءه</h3>
<p className="text-secondary">3 مقالات</p>
    </div>
    <div className="dark border-secondary-subtle p-3 rounded-3 text-start col-3 text-center">
<div className="orange-bg border-orange p-2 rounded-3 orange-text w-5 m-auto"><i className="fa-solid fa-user"></i></div>
<h3 className="text-white fw-bold">بورتريه</h3>
<p className="text-secondary">3 مقالات</p>
    </div>
    <div className="dark border-secondary-subtle p-3 rounded-3 text-start col-3 text-center">
<div className="orange-bg border-orange p-2 rounded-3 orange-text w-5 m-auto"><i className="fa-solid fa-mountain-sun"></i></div>
<h3 className="text-white fw-bold">مناظر طبيعيه</h3>
<p className="text-secondary">2 مقالات</p>
    </div>
    <div className="dark border-secondary-subtle p-3 rounded-3 text-start col-3 text-center">
<div className="orange-bg border-orange p-2 rounded-3 orange-text w-5 m-auto"><i className="fa-solid fa-list"></i></div>
<h3 className="text-white fw-bold">تقنيات</h3>
<p className="text-secondary">5 مقالات</p>
    </div>
    <div className="dark border-secondary-subtle p-3 rounded-3 text-start col-3 text-center">
<div className="orange-bg border-orange p-2 rounded-3 orange-text w-5 m-auto"><i className="fa-solid fa-scroll"></i></div>
<h3 className="text-white fw-bold">معدات</h3>
<p className="text-secondary">3 مقالات</p>
    </div>
</div>
</div>

</div>
<div className="bg-black p-5">
    <div>
        <h1 className="text-white mb-1">احدث المقالات</h1>
        <div className="d-flex justify-content-between">
            <p className="orange-text"><i className="fa-solid fa-arrow-left"></i>عرض جميع المقالات</p>
            <p className="text-secondary-emphasis">محتوي جديد طازج من المطبعه</p>
        </div>
    </div>
<div className="container">
    <div className="row p-4 dark">
       <div className="col-4 border-grey rounded-2 text-end mt-5 p-2">
                        <div className="text-white bg-black bg-opacity-25 rounded-5 m-auto p-2 w-35 text-center card"> معدات</div>
                        <img src="./img/photo-1500835556837-99ac94a94552.jfif" className="w-100 mt-5 img-2" alt=""/>
                        <p className="text-dark-emphasis mt-2">  دقايق للقراءه  3 يناير 2026  </p>
                        <h4 className="text-white fw-bold">تصوير الهاتف المحمول:كيف تلتقط صوره احترافيه بهاتفك</h4>
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
       <div className="col-4 border-grey rounded-2  text-end mt-5 p-2">
                        <div className="text-white bg-black bg-opacity-25 rounded-5 m-auto p-2 w-35 text-center card"> معدات</div>
                        <img src="./img/photo-1500835556837-99ac94a94552.jfif" className="w-100 mt-5 img-2" alt=""/>
                        <p className="text-dark-emphasis mt-2">  دقايق للقراءه  3 يناير 2026  </p>
                        <h4 className="text-white fw-bold">تصوير الهاتف المحمول:كيف تلتقط صوره احترافيه بهاتفك</h4>
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
       <div className="col-4 border-grey  rounded-2  text-end mt-5 p-2">
                        <div className="text-white bg-black bg-opacity-25 rounded-5 m-auto p-2 w-35 text-center card"> معدات</div>
                        <img src="./img/photo-1500835556837-99ac94a94552.jfif" className="w-100 mt-5 img-2" alt=""/>
                        <p className="text-dark-emphasis mt-2">  دقايق للقراءه  3 يناير 2026  </p>
                        <h4 className="text-white fw-bold">تصوير الهاتف المحمول:كيف تلتقط صوره احترافيه بهاتفك</h4>
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

    </div>
</div>
<div className="dark p-5 mx-auto mt-4 border-grey rounded-3 w-75">
<div className="bg-orange p-2 rounded-3 text-white w-5 mx-auto"><i className="fa-solid fa-envelope"></i></div>
<h2 className="fs-1 fw-bold text-white">اشترك في <span className="orange-text">نشرتنا الاخباريه </span></h2>
<p className="text-secondary-emphasis">احصل علي نصائح التصوير الحصريه و دروس جديده مباشره في بريدك الالكتروني</p>
<input type="text" placeholder="ادخل بريدك الالكتروني"  className="bg-dark border-grey text-secondary-emphasis  p-2 rounded-3"/>
<button className="bg-orange text-white p-2 rounded-3 ms-3">اشترك الان</button>
<div className="text-secondary-emphasis d-flex justify-content-around mt-4">
    <p>بدون ازعاج</p>
    <p>الغاء الاشتراك في اي وقت</p>
    <p>انضم ل <span className="text-white fw-bold">10000+</span> مصور</p>
</div>
</div>
</div>
        </div>
        </section>
    </>
)
}
export default Home;