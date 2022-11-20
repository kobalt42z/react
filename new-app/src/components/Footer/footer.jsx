import React from 'react'
import "./footer.scss"
import downChevron from "./chevroun-down.svg"

function Footer() {
    return (
        <footer>
            <div className="container p-5">
                <div className="row row-cols-md-4 row-cols-2 text-start  justify-content-center ">
                    <ul className='list-unstyled'>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Investor Relations</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Speed Test</a></li>
                    </ul>
                    <ul className='list-unstyled'>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Cookie Preferences</a></li>
                        <li><a href="">Legal Notices</a></li>
                    </ul>
                    <ul className='list-unstyled'>
                        <li><a href="">Account</a></li>
                        <li><a href="">Ways to Watch</a></li>
                        <li><a href="">Corporate Information</a></li>
                        <li><a href="">Only on Netflix</a></li>
                    </ul>
                    <ul className='list-unstyled'>
                        <li><a href="">Media Center</a></li>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href=""></a></li>
                    </ul>
                </div>
                <div className="row">
                    <select class="form-select form-select-sm mb-3 lang-select" >
                        <option selected>English</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </footer>
    )
}

export default Footer