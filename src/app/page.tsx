import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div>
      <Header bg={'bg-secondary'} textColor={'text-primary'} />
      <Main />
      <Footer />
    </div>
  );
}
