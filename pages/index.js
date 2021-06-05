// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/profile')
  }

  return (
    <div className={styles.container}>
      <div class="card" style={{ width: '18rem' }}>
        <div class="card-body">
          <h5 class="card-title">GitHub Panel</h5>
          <div class="form-group">
            <label htmlFor="exampleInputEmail1">GitHub Username</label>
            <input type="email" class="form-control mt-2 mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <button type="button" class="w-100 btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Submit</button>
            <a href='#'><small >Need Help?</small ></a>
          </div>
        </div>
      </div>
    </div>
  )
}
