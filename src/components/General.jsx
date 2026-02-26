import "../styles/General.css";

function Input({ user, handleChange }) {
  return (
    <form className="general-form">
      <label htmlFor="fullname">
        Full Name
        <span className="required">*</span>
      </label>
      <input
        type="text"
        name="Name"
        id="fullname"
        placeholder="John Doe"
        value={user.Name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">
        Email
        <span className="required">*</span>
      </label>
      <input
        type="email"
        name="Email"
        id="email"
        placeholder="johndoe@example.com"
        value={user.Email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        name="Phone"
        id="phone"
        placeholder="000-000-0000"
        value={user.Phone}
        onChange={handleChange}
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="Address"
        id="address"
        placeholder="City, Country"
        value={user.Address}
        onChange={handleChange}
      />
    </form>
  );
}
export default function General({ user, handleChange }) {
  return (
    <div className="general-info">
      <h2>Personal Details</h2>
      <Input user={user} handleChange={handleChange}></Input>
    </div>
  );
}
