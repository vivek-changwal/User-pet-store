import LoginPage from './component/loginPage/index'
import HomePage from './component/ProductCategoryPage/index'
import Head from 'next/head';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pet-Store</title>
      </Head>
      <LoginPage />
      <HomePage/>
    </div>
  )
}
