export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>section-1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="IN">India</option>
            <option value="CA">Canada</option>
            <option value="JP">Japan</option>
          </select>
        </div>
        <div>
          <label htmlFor="comments">Comments</label>
          <input type="text" id="comments" placeholder="Please add comments" />
        </div>
        <div>
          <label>
            {" "}
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
        <button>submit</button>
      </form>
    </>
  );
};
