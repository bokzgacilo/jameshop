

function Signup() {

  return (
    <>
      <h2>Register</h2>
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="fullname" />
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Register</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
