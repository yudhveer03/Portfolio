import "./Contact.css"
export default function Contact() {



    return (

      <section class="contact-section" id="contact">
        <h2 class="contact-heading">Contact Me</h2>
        <span>Send a Message Directly on Whatsapp</span>

        <form class="contact-form" >
          <div class="input-group">
            <input type="text" name="name"   required />
            <label>Name</label>
          </div>

          <div class="input-group">
            <input type="email" name="email"   required />
            <label>Email</label>
          </div>

          <div class="input-group">
            <textarea rows="4" name="message"   required></textarea>
            <label>Message</label>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>



    )
  }
