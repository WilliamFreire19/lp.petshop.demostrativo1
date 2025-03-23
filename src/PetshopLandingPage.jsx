import React, { useState, useEffect } from 'react';
import './PetshopLandingPage.css';

// Componente principal da landing page
const PetshopLandingPage = () => {
  // Estado para o menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Estado para o formulário de contato
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  
  // Estado para mensagem de sucesso do formulário
  const [formSuccess, setFormSuccess] = useState(false);

  // Função para toggle do menu mobile
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Função para fechar o menu quando um link é clicado
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  // Função para manipular mudanças nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para enviar o formulário via WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formata a mensagem para WhatsApp
    const whatsappMessage = `Nome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0AMensagem: ${formData.mensagem}`;
    const whatsappUrl = `https://wa.me/5591984494962?text=${whatsappMessage}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
    
    // Limpa o formulário e mostra mensagem de sucesso
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
    setFormSuccess(true);
    
    // Remove a mensagem de sucesso após 5 segundos
    setTimeout(() => setFormSuccess(false), 5000);
  };

  // Efeito para lidar com o redimensionamento da janela
  useEffect(() => {
    // Função para controlar o estilo do navbar durante o scroll
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.padding = '10px 0';
          navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
          navbar.style.padding = '15px 0';
          navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
      }
    };

    // Função para fechar o menu mobile em telas grandes
    const handleResize = () => {
      if (window.innerWidth > 992 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    // Adicionar event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Adicionar classe para evitar scroll quando o menu mobile está aberto
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Limpar event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="petshop-landing">
      {/* Navegação */}
      <nav id="navbar">
        <div className="container">
          <div className="logo">
            <h1>Pet<span>Amigo</span></h1>
          </div>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#sobre" onClick={closeMenu}>Sobre Nós</a></li>
            <li><a href="#servicos" onClick={closeMenu}>Serviços</a></li>
            <li><a href="#depoimentos" onClick={closeMenu}>Depoimentos</a></li>
            <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
          </ul>
          <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </nav>

      {/* Overlay para o menu mobile */}
      {mobileMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}

      {/* Seção Home */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Cuidados especiais para seu melhor amigo</h1>
            <p>O lugar onde seu pet recebe todo amor e atenção que merece</p>
            <a href="#servicos" className="btn-primary">Nossos Serviços</a>
          </div>
          <div className="hero-image">
            <img src="/images/banner.jpg" alt="Cachorro feliz" />
          </div>
        </div>
      </section>

      {/* Seção Sobre Nós */}
      <section id="sobre" className="about">
        <div className="container">
          <h2 className="section-title">Sobre Nós</h2>
          <div className="about-content">
            <div className="about-image">
              <img src='./images/equipe.jpeg' alt="Nossa equipe com animais" />
            </div>
            <div className="about-text">
              <h3>Quem Somos</h3>
              <p>Somos uma equipe apaixonada por animais, comprometida em oferecer os melhores cuidados para seu pet. Fundada em 2015, a PetAmigo nasceu do amor pelos animais e da vontade de proporcionar serviços de alta qualidade.</p>
              
              <h3>Nossa Missão</h3>
              <p>Proporcionar saúde, bem-estar e felicidade aos pets, através de serviços de qualidade, atendimento humanizado e produtos selecionados.</p>
              
              <h3>Valores</h3>
              <p>• Amor e respeito aos animais<br />
              • Excelência em atendimento<br />
              • Profissionalismo e ética<br />
              • Responsabilidade social</p>
              
              <a href="#contato" className="btn-secondary">Entre em Contato</a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="services">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="icon">
                <i className="fas fa-bath"></i>
              </div>
              <h3>Banho & Tosa</h3>
              <p>Limpeza completa, cortes personalizados e cuidados especiais para cada tipo de pelagem.</p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <i className="fas fa-stethoscope"></i>
              </div>
              <h3>Veterinária</h3>
              <p>Consultas, vacinas, exames e tratamentos com nossa equipe veterinária especializada.</p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <i className="fas fa-paw"></i>
              </div>
              <h3>Pet Shop</h3>
              <p>Alimentos premium, acessórios, brinquedos e produtos de higiene de alta qualidade.</p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>Day Care</h3>
              <p>Cuidamos do seu pet enquanto você trabalha, com atividades recreativas e monitoramento.</p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Taxi Pet</h3>
              <p>Transporte seguro e confortável para seu pet ir e voltar do petshop ou clínica.</p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Adoção Responsável</h3>
              <p>Programa de adoção de animais resgatados, já vacinados e castrados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section id="depoimentos" className="testimonials">
        <div className="container">
          <h2 className="section-title">Depoimentos</h2>
          <div className="testimonial-slider">
            <div className="testimonial-item">
              <div className="client-image">
                <img src="/images/clienteAna.jpg" alt="Cliente Ana" />
              </div>
              <div className="testimonial-content">
                <p>"Meu cachorro Toby sempre volta feliz e cheiroso após o banho. A equipe é super carinhosa e atenciosa com ele. Recomendo muito!"</p>
                <h4>Ana Silva</h4>
                <p className="client-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </p>
              </div>
            </div>
            
            <div className="testimonial-item">
              <div className="client-image">
                <img src="/images/clientePedro.jpg" alt="Cliente Pedro" />
              </div>
              <div className="testimonial-content">
                <p>"O atendimento veterinário é excelente! Minha gata foi tratada com muito carinho e profissionalismo. Os preços são justos e o ambiente é muito limpo."</p>
                <h4>Pedro Santos</h4>
                <p className="client-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </p>
              </div>
            </div>
            
            <div className="testimonial-item">
              <div className="client-image">
                <img src="/images/clienteMarina.jpg" alt="Cliente Mariana" />
              </div>
              <div className="testimonial-content">
                <p>"Utilizo o day care duas vezes por semana e meu pet adora! Ele volta cansado e feliz. As fotos que recebo durante o dia mostram como ele se diverte."</p>
                <h4>Mariana Costa</h4>
                <p className="client-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="contact">
        <div className="container">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="contact-container">
            <div className="contact-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Endereço</h3>
                  <p>Av. Principal, 1234 - Centro<br />Belém, PA - Brasil</p>
                </div>
              </div>
              
              <div className="info-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h3>Telefone</h3>
                  <p>(91) 98449-4962</p>
                  <p>(91) 3223-4567</p>
                </div>
              </div>
              
              <div className="info-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h3>Horário de Funcionamento</h3>
                  <p>Segunda a Sexta: 8h às 19h</p>
                  <p>Sábados: 8h às 17h</p>
                  <p>Domingos: 9h às 13h (apenas emergências)</p>
                </div>
              </div>
              
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>contato@petamigo.com.br</p>
                </div>
              </div>
              
              <div className="social-media">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <input 
                    type="text" 
                    id="nome" 
                    name="nome" 
                    value={formData.nome}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input 
                    type="tel" 
                    id="telefone" 
                    name="telefone" 
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea 
                    id="mensagem" 
                    name="mensagem" 
                    rows="5"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary">Enviar Mensagem</button>
                
                {formSuccess && (
                  <div className="form-success">
                    Mensagem enviada com sucesso! Em breve entraremos em contato.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>Pet<span>Amigo</span></h2>
              <p>Cuidando com amor do seu melhor amigo</p>
            </div>
            
            <div className="footer-links">
              <h3>Links Rápidos</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>
            
            <div className="footer-services">
              <h3>Serviços</h3>
              <ul>
                <li><a href="#servicos">Banho & Tosa</a></li>
                <li><a href="#servicos">Veterinária</a></li>
                <li><a href="#servicos">Pet Shop</a></li>
                <li><a href="#servicos">Day Care</a></li>
                <li><a href="#servicos">Taxi Pet</a></li>
              </ul>
            </div>
            
            <div className="footer-map">
              <h3>Onde Estamos</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6913207297234!2d-48.4354413255166!3d-1.361862235712371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a46121b8274069%3A0xca4d4ff498ba6331!2sPet%20Shop%20Raposo!5e0!3m2!1spt-BR!2sbr!4v1741823607244!5m2!1spt-BR!2sbr"
                title="Mapa do nosso pet shop"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 PetAmigo - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PetshopLandingPage;