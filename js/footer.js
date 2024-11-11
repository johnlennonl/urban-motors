// Crear el footer usando JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <style>
            footer {
                background-color: #1b1b1b;
                color: #fff;
                padding: 20px 0;
                font-family: Arial, sans-serif;
                font-size: 14px;
            }
            .footer-container {
                display: flex;
                justify-content: space-around;
                max-width: 1200px;
                margin: auto;
            }
            .footer-section {
                flex: 1;
                padding: 0 15px;
            }
            .footer-section h3 {
                font-size: 16px;
                border-bottom: 1px solid #666;
                padding-bottom: 5px;
                margin-bottom: 10px;
                color: #fff;
            }
            .footer-section p, .footer-section a {
                color: #bbb;
                text-decoration: none;
                line-height: 1.8;
            }
            .footer-section a:hover {
                color: #fff;
            }
            .footer-bottom {
                text-align: center;
                margin-top: 20px;
                font-size: 12px;
                color: #666;
            }
            .footer-bottom a {
                color: #999;
                text-decoration: none;
            }
            .footer-bottom a:hover {
                color: #fff;
            }
            .social-icons {
                display: flex;
                gap: 10px;
            }
            .social-icons img {
                width: 20px;
                height: 20px;
            }
        </style>
        
        <div class="footer-container">
            <div class="footer-section">
                <h3>Links</h3>
                <p><a href="#">Home</a></p>
                <p><a href="#">Inventory</a></p>
                <p><a href="#">Financing</a></p>
                <p><a href="#">Contact Us</a></p>
                <p><a href="#">Privacy Policy</a></p>
            </div>
            <div class="footer-section">
                <h3>About Us</h3>
                <p>TRANSPARENT. DIFFERENT. CAR BUYING.<br>
                   Relax, we're not your typical old school dealership.
                   If you don't believe us, check out our Facebook, Instagram or read our reviews!
                   Urban Motors is not affiliated with Urban Autocare.
                </p>
            </div>
            <div class="footer-section">
                <h3>Contact Info</h3>
                <p>Urban Motors Blue<br>
                   📞 (720) 445-7575<br>
                   📍 5400 Federal Blvd, Denver, CO 80221</p>
                <p>Urban Motors Red<br>
                   📞 (720) 665-9071<br>
                   📍 1840 Wadsworth Blvd, Lakewood, CO 80214</p>
                <p>Urban Motors Green<br>
                   📞 (303) 862-9139<br>
                   📍 1655 Wadsworth Blvd, Lakewood, CO 80214</p>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>Copyright © 2024, All Rights Reserved</p>
            <p>Powered by ASN Software</p>
        </div>
    `;
    document.body.appendChild(footer);
});
