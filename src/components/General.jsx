import "../styles/General.css";

function Input() {
  return (
    <form className="general-form">
      <label htmlFor="fullname">
        Full Name
        <span className="required">*</span>
      </label>
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="John Doe"
        required
      />

      <label htmlFor="email">
        Email
        <span className="required">*</span>
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="johndoe@example.com"
        required
      />

      <label htmlFor="phone">Phone Number</label>
      <input type="tel" name="phone" id="phone" placeholder="000-000-0000" />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="City, Country"
      />
    </form>
  );
}
export default function General() {
  return (
    <div className="general-info">
      <h2>Personal Details</h2>
      <Input></Input>
    </div>
  );
}
