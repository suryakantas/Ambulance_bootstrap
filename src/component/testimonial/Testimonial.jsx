import { Container } from "@material-ui/core"
import { Card, Col, Row } from "react-bootstrap"
import "./testimonial.css"
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from "jquery";

export default function Testimonial() {
    // var $ = require( "jquery" );
    // $('.testi3').owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     nav: false,
    //     dots: true,
    //     autoplay: true,
    //     responsiveClass: true,
    //     responsive: {
    //       0: {
    //         items: 1,
    //         nav: false
    //       },
    //       1024: {
    //         items: 3
    //       }
    //     }
    //   })
    return (
        <div className="testimonial">
            <Row>
                <Container>
                    <h3>What People are Say About Us?</h3>
                    <Row>
                    {/* <div class="testimonial3 py-5 bg-light">
                        <div class="container">
                            <div class="row justify-content-center">
                            <div class="col-md-8 text-center">
                                <h4 class="mb-3">Check what our Customers are Saying</h4>
                                <h6 class="subtitle font-weight-normal">You can relay on our amazing features list and also our customer services will be great experience for you without doubt</h6>
                            </div>
                            </div>
                        
                            <div class="owl-carousel owl-theme testi3 mt-4">
                        
                            <div class="item">
                                <div class="card card-shadow border-0 mb-4">
                                <div class="card-body">
                                    <h6 class="font-weight-light mb-3">“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</h6>
                                    <div class="d-block d-md-flex align-items-center">
                                    <span class="thumb-img"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/1.jpg" alt="wrapkit" class="rounded-circle"/></span>
                                    <div class="ml-3">
                                        <h6 class="mb-0 customer">Michelle Anderson</h6>
                                        <div class="font-10">
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-muted"><i class="icon-star"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="card card-shadow border-0 mb-4">
                                <div class="card-body">
                                    <h6 class="font-weight-light mb-3">“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</h6>
                                    <div class="d-block d-md-flex align-items-center">
                                    <span class="thumb-img"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/2.jpg" alt="wrapkit" class="rounded-circle"/></span>
                                    <div class="ml-3">
                                        <h6 class="mb-0 customer">Mark mesty</h6>
                                        <div class="font-10">
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-muted"><i class="icon-star"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="card card-shadow border-0 mb-4">
                                <div class="card-body">
                                    <h6 class="font-weight-light mb-3">“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</h6>
                                    <div class="d-block d-md-flex align-items-center">
                                    <span class="thumb-img"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/3.jpg" alt="wrapkit" class="rounded-circle"/></span>
                                    <div class="ml-3">
                                        <h6 class="mb-0 customer">Limpsy adam</h6>
                                        <div class="font-10">
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-muted"><i class="icon-star"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="card card-shadow border-0 mb-4">
                                <div class="card-body">
                                    <h6 class="font-weight-light mb-3">“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</h6>
                                    <div class="d-flex no-block align-items-center">
                                    <span class="thumb-img"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/1.jpg" alt="wrapkit" class="rounded-circle"/></span>
                                    <div class="ml-3">
                                        <h6 class="mb-0 customer">Michelle Anderson</h6>
                                        <div class="font-10">
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-success"><i class="icon-star"></i></a>
                                        <a href="" class="text-muted"><i class="icon-star"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div> */}
                    </Row>
                </Container>
            </Row>
        </div>
    )
}
