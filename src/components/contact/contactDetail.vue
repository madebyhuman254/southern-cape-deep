<template>
    <div class="container">
    <p>Send us a message</p>
    <h1>Contact Us</h1>
    <div class="container my-3 my-sm-5">
      <div class="row">
        <div class="col-12 col-md-6">
          <h4>Address:</h4>
          <address>
            <strong>Southern Cape Deep Kleaners & Pest Control</strong><br>
            Thembalethu, Western Cape<br>
            George, 6529<br>
            South Africa<br>
            <i class="fa fa-fw fa-phone" aria-hidden="true"></i> <a href="#">(083) 438-1455</a><br>
              <i class="fa fa-fw fa-envelope-o" aria-hidden="true"></i> <a href="#">s.c.deepklearnerspestcontrol@gmail.com</a>
          </address>
        </div>
        <div class="col-12 col-md-6">
          <h4>Opening hours:</h4>
          <p>
            Monday-Thursday: <span class="float-right">8 am - 5 pm</span><br>
            Friday-Saturday: <span class="float-right">8 am - 5 pm</span><br>
            Sunday: <span class="float-right">8 am - 5 pm</span><br>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 mb-3">
          <h4>Send us a message:</h4>
          <form>
            <div class="row">
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label for="name">Name:</label>
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i></span>
                    <input type="text" id="name" class="form-control" name="name" placeholder="Name" required="">
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label for="email">Email:</label>
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                    <input type="email" id="email" class="form-control" name="email" placeholder="example@email.com" required="">
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label for="telephone">Telephone:</label>
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                    <input type="tel" id="telephone" class="form-control" name="telephone" placeholder="0123456789">
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="textarea">Message:</label>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                <textarea id="textarea" class="form-control" rows="5" placeholder="Write your message here..." required=""></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>&nbsp;&nbsp;
            <button type="reset" class="btn btn-secondary">Reset</button>
          </form>
        </div>
        <div class="col-12 col-lg-6">
          <h4>Where to find us:</h4>
          <div class="embed-responsive embed-responsive-4by3">
            <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13230.063033850884!2d22.477820242322295!3d-34.00496985166849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd61ba793ee65e7%3A0x2a24fac2e495bb46!2sThembalethu%2C%20George%2C%206529!5e0!3m2!1sen!2sza!4v1634221824858!5m2!1sen!2sza" width="600" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
h1 {
  margin: 0;
  font-size: 45px;
  font-weight: bold;
}
h2 {
  margin: 0;
  font-size: 20px;
  text-transform: uppercase;
  color: #007be7;
  line-height: 120.6%;
  text-align: center;
}
h4 {
  margin: 0;
  font-size: 15px;
  color: #007be7;
  line-height: 120.6%;
  text-transform: uppercase;
}
p {
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  color: #666161;
  line-height: 120.6%;
  text-transform: uppercase;
}

</style>
