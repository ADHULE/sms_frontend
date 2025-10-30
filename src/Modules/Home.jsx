import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.scss';
import Footer from '../Components/Footer';

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <NavBar />

                {/* SECTION HERO */}
                <header className="hero-section text-center d-flex flex-column align-items-center justify-content-center">
                    <h1 className="display-4 fw-bold mb-3">Employee Management System</h1>
                    <p className="lead mb-4">
                        Gérez efficacement vos employés, suivez leurs performances et envoyez des notifications par SMS en temps réel.
                    </p>
                    <a href="/dashboard" className="btn btn-primary btn-lg shadow-sm">
                        Accéder au Tableau de Bord
                    </a>
                </header>

                {/* SECTION FONCTIONNALITÉS */}
                <section className="features container text-center mt-5">
                    <h2 className="mb-4 fw-bold">Fonctionnalités Principales</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card feature-card p-4 shadow-sm">
                                <i className="bi bi-people-fill fs-1 text-primary mb-3"></i>
                                <h5>Gestion des Employés</h5>
                                <p>Ajoutez, modifiez ou supprimez les employés facilement depuis le tableau de bord.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card feature-card p-4 shadow-sm">
                                <i className="bi bi-graph-up-arrow fs-1 text-success mb-3"></i>
                                <h5>Suivi des Performances</h5>
                                <p>Analysez la productivité, les présences et les performances de chaque employé.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card feature-card p-4 shadow-sm">
                                <i className="bi bi-chat-left-text-fill fs-1 text-warning mb-3"></i>
                                <h5>Alertes & SMS</h5>
                                <p>Envoyez des notifications automatiques ou manuelles aux employés en un clic.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION AVANTAGES */}
                <section className="advantages text-center py-5 mt-5">
                    <div className="container">
                        <h2 className="fw-bold mb-4">Pourquoi Choisir Notre Système ?</h2>
                        <p className="mb-5">
                            Notre solution simplifie la gestion du personnel tout en améliorant la communication et la productivité.
                        </p>
                        <div className="row">
                            <div className="col-md-3 mb-4">
                                <div className="advantage-card p-4 shadow-sm">
                                    <i className="bi bi-shield-check fs-2 text-primary mb-2"></i>
                                    <h6>Sécurité</h6>
                                    <p>Vos données sont protégées et accessibles uniquement aux administrateurs autorisés.</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="advantage-card p-4 shadow-sm">
                                    <i className="bi bi-speedometer2 fs-2 text-success mb-2"></i>
                                    <h6>Rapidité</h6>
                                    <p>Des opérations instantanées grâce à une interface fluide et réactive.</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="advantage-card p-4 shadow-sm">
                                    <i className="bi bi-phone-fill fs-2 text-warning mb-2"></i>
                                    <h6>Notifications Mobiles</h6>
                                    <p>Recevez des alertes sur vos appareils mobiles à tout moment.</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="advantage-card p-4 shadow-sm">
                                    <i className="bi bi-bar-chart-line fs-2 text-info mb-2"></i>
                                    <h6>Analyse</h6>
                                    <p>Visualisez les statistiques clés en temps réel avec des graphiques modernes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

              <Footer></Footer>
            </div>
        );
    }
}

export default Home;
