function FormContainer() {
  return (
    <section id="generate" className="max-w-6xl mx-auto w-full pt-36">
      <div className="flex flex-col justify-center items-center">
        <div class="form-container max-w-3xl lg:max-w-4xl w-full">
          <div className="form_area">
            <p className="title">What do you want to write?</p>
            <form action="" className="space-y-6">
              <div className="form_group">
                <label className="sub_title" for="content_brief">
                  Content Brief
                </label>
                <textarea
                  placeholder="Create a comedy script for TikTok that is engaging and will get a lot of views."
                  name="content_brief"
                  className="form_style"
                  type="text"
                />
              </div>
              <div className="form_group">
                <label className="sub_title" for="email">
                  HashTags
                </label>
                <input
                  placeholder="Optional * - Separate each with commas"
                  id="hashtags"
                  className="form_style"
                  type="text"
                />
              </div>
              <div className="form_group">
                <label class="sub_title" for="interest">
                  Interest
                </label>
                <select
                  placeholder="Enter your password"
                  id="password"
                  class="form_style"
                  type="password"
                  multiple
                />
              </div>
              {/* <div>
                <button className="btn">Generate Content</button>
                <p>
                  Have an Account?{" "}
                  <a class="link" href="">
                    Login Here!
                  </a>
                </p>
                <a class="link" href=""></a>
              </div> */}
              <a class="link" href=""></a>
            </form>
          </div>
          <a class="link" href=""></a>
        </div>
      </div>
    </section>
  );
}

export default FormContainer;
