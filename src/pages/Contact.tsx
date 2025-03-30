import ContactUs from "../components/ContactUs";
export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          We're here to help and answer any question you might have.
        </p>
      </div>

      <ContactUs/>
    </div>
  );
}