import BreadCrumbs from "../../Element/Bread-Crumb/BreadCrumb";
import Button from "../../Element/Button/Button";

const Contacts = () => {
  const formInputs = [
    { id: "floatingNama", type: "text", label: "Nama Anda", placeholder: "Nama Anda" },
    { id: "floatingTelepon", type: "number", label: "No. Telp/Ponsel", placeholder: "No. Telp/Ponsel" },
    { id: "floatingInput", type: "email", label: "Email", placeholder: "name@example.com" },
    { id: "floatingSubjek", type: "text", label: "Subjek", placeholder: "Subjek" },
    { id: "floatingTextarea2", type: "textarea", label: "Pesan Anda", placeholder: "Leave a comment here" },
  ];

  return (
    <section className="container">
      <BreadCrumbs breadText={"Contact Us"} />
      <form className="m-2 p-4 rounded" id="form">
        <h1 className="text-white text-center mb-5" data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-sine">
          Contact <span>Us</span>
        </h1>
        {formInputs.map((input, index) => (
          <div className="form-floating mb-3" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-sine" key={index}>
            {input.type === "textarea" ? (
              <textarea className="form-control" placeholder={input.placeholder} id={input.id}></textarea>
            ) : (
              <input type={input.type} className="form-control" id={input.id} placeholder={input.placeholder} />
            )}
            <label htmlFor={input.id}>{input.label}</label>
          </div>
        ))}
        <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine">
          <Button type="submit" className="btn text-white fw-bold buttonAll">
            Kirim
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contacts;
