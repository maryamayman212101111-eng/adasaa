function Footer()
{
    return(
    <>
    <footer className="bg-dark text-white text-center p-3 pt-5">
<div className="container-fluid ">
    <div className="row mx-1">
        <div className="col-3">
            <div className="d-flex">
                <div className="bg-orange text-white fw-bold rounded-3 p-2">ع</div>
                <div className="text-white fw-bold">عدسه</div>
            </div>
            <p className="text-secondary">مدونه متخصصه في فن التصوير الفوتوغرافيز نشارك معكم اسرار المحترفين و نصائح عمليه لتطوير مهارتكم</p>
            <div className="d-flex justify-content-around">
          <div className="p-2 rounded-3 border-grey"> <i className="fa-brands fa-youtube"></i></div> 
           <div className="p-2 rounded-3 border-grey"><i className="fa-brands fa-linkedin"></i></div> 
          <div className="p-2 rounded-3 border-grey"> <i className="fa-brands fa-github"></i></div> 
            <div className="p-2 rounded-3 border-grey"><i className="fa-brands fa-twitter"></i></div> 
            </div>
        </div>
        <div className="col-3">
            <h2 className="text-white fw-bold">استكشف</h2>
            <p className="text-secondary">الرئاسيه</p>
            <p className="text-secondary">المدونه</p>
            <p className="text-secondary">من نحن</p>
        </div>
        <div className="col-3">
            <h2 className="text-white fw-bold">التصنيفات</h2>
            <p className="text-secondary">اضاءه</p>
            <p className="text-secondary">بورتريه</p>
            <p className="text-secondary"> مناظر طبيعية</p>
            <p className="text-secondary">تقنيات</p>
        </div>
        <div className="col-3">
            <h2 className="text-white fw-bold">ابقي علي اطلاع</h2>
            <p className="text-secondary">اشترك للحصول علي احدثالمقالات و التحديثات</p>
            <input type="text" placeholder="ادخل بريدك الالكتروني" className="text-secondary border-grey p-2 dark rounded-3"/>
            <button className="bg-orange text-white p-2 w-50 mt-2 rounded-3">اشترك</button>
        </div>
    </div>
</div>
<hr />
<div className="d-flex justify-content-between">
<div className="text-secondary">2026 عدسهز صنع بكل حب جميع الحقوق محفوظه</div>
<div className="text-secondary d-flex"> 
 <p>سياسه الخوصوصيه</p>
<p> شروط الخدمه </p>
</div>
</div>
    </footer>
    </>
)
}
export default Footer;
