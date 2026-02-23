import "../styles/General.css";

function Input({ user, updateName, updateEmail, updatePhone, updateAddress }) {
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
        value={user.Name}
        onChange={updateName}
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
        value={user.Email}
        onChange={updateEmail}
        required
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="000-000-0000"
        value={user.Phone}
        onChange={updatePhone}
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="City, Country"
        value={user.Address}
        onChange={updateAddress}
      />
    </form>
  );
}
export default function General({
  user,
  updateName,
  updateEmail,
  updatePhone,
  updateAddress,
}) {
  return (
    <div className="general-info">
      <h2>Personal Details</h2>
      <Input
        user={user}
        updateName={updateName}
        updateEmail={updateEmail}
        updatePhone={updatePhone}
        updateAddress={updateAddress}
      ></Input>
    </div>
  );
}
