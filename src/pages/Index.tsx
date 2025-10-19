import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    {
      icon: "Hammer",
      title: "Мелкий ремонт",
      description: "Все виды мелкого ремонта: покраска, шпаклевка, замена замков и многое другое",
      color: "bg-purple-900/40 hover:bg-purple-900/60 border-purple-500",
      neon: "neon-purple"
    },
    {
      icon: "Wrench",
      title: "Сантехника",
      description: "Установка и ремонт сантехники, устранение протечек, замена смесителей",
      color: "bg-pink-900/40 hover:bg-pink-900/60 border-pink-500",
      neon: "neon-pink"
    },
    {
      icon: "Zap",
      title: "Электрика",
      description: "Монтаж розеток, выключателей, люстр. Замена проводки и диагностика",
      color: "bg-cyan-900/40 hover:bg-cyan-900/60 border-cyan-500",
      neon: "neon-cyan"
    },
    {
      icon: "Package",
      title: "Сборка мебели",
      description: "Профессиональная сборка любой мебели: шкафы, кухни, столы, кровати",
      color: "bg-purple-900/40 hover:bg-purple-900/60 border-purple-500",
      neon: "neon-purple"
    },
    {
      icon: "Heart",
      title: "Массаж",
      description: "Расслабляющий и лечебный массаж. Снятие напряжения и восстановление сил",
      color: "bg-pink-900/40 hover:bg-pink-900/60 border-pink-500",
      neon: "neon-pink"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Отличный мастер! Быстро собрал шкаф и починил кран на кухне. Все аккуратно и профессионально.",
      rating: 5,
      avatar: "👩"
    },
    {
      name: "Наталья",
      text: "Вызывал для электрики. Заменил все розетки в квартире за пару часов. Рекомендую!",
      rating: 5,
      avatar: "👩"
    },
    {
      name: "Елена Смирнова",
      text: "Массаж просто волшебный! После рабочей недели - именно то что нужно. Теперь постоянный клиент.",
      rating: 5,
      avatar: "👩‍🦰"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-purple-500/30">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Icon name="Heart" className="text-primary neon-pink" size={28} />
              <Icon name="Wrench" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 neon-cyan" size={14} />
            </div>
            <span className="text-2xl font-bold neon-pink">Муж на час</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors neon-text">Услуги</a>
            <a href="#reviews" className="hover:text-primary transition-colors neon-text">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors neon-text">Контакты</a>
          </div>
          <Button size="sm" className="hidden md:block glow-effect">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                <span className="neon-pink block">МУЖ на ЧАС</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ремонт, сантехника, электрика, сборка мебели + расслабляющий массаж + ремонт душевных ран
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="https://wa.me/79059442221" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать в WhatsApp
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Работаем всегда</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/761ca3c7-9805-46e6-a2dd-e21a9373e18c/files/72c2538e-0154-40ef-892a-17d79076587c.jpg"
                alt="Профессиональный мастер"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-purple">Наши услуги</h2>
            <p className="text-xl text-cyan-300">Качественно и быстро решаем любые бытовые задачи</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`${service.color} border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer glow-effect`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-black/60 rounded-xl flex items-center justify-center mb-4 shadow-md neon-border border-current">
                    <Icon name={service.icon as any} size={28} className={service.neon} />
                  </div>
                  <CardTitle className={`text-2xl ${service.neon}`}>{service.title}</CardTitle>
                  <CardDescription className="text-base text-foreground/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between group">
                    Подробнее
                    <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/30 via-black to-purple-950/30"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/files/8cfb6470-a4dc-4c31-b74b-67aceae19e2c.jpg"
                alt="Массаж"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 neon-pink">Дополнительная услуга: Массаж</h2>
              <p className="text-lg text-muted-foreground mb-6">
                После тяжелой рабочей недели или напряженных будней — расслабьтесь с профессиональным массажем.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Расслабляющий массаж всего тела",
                  "Снятие мышечного напряжения",
                  "Лечебный массаж спины и шеи",
                  "Индивидуальный подход к каждому клиенту"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 neon-border border-pink-500">
                      <Icon name="Check" size={16} className="text-white neon-pink" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="glow-effect" asChild>
                <a href="https://wa.me/79059442221" target="_blank" rel="noopener noreferrer">
                  Записаться на массаж
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-cyan">Отзывы клиентов</h2>
            <p className="text-xl text-purple-300">Нам доверяют сотни довольных клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-purple-900/30 border-2 border-purple-500/30 hover:shadow-xl transition-shadow glow-effect">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{review.avatar}</div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base text-foreground/80 leading-relaxed">
                    "{review.text}"
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-pink-950/40"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-purple">Свяжитесь с нами</h2>
            <p className="text-xl text-pink-300">Оставьте заявку и мы свяжемся с вами в течение 15 минут</p>
          </div>
          <Card className="bg-black/60 border-2 border-pink-500/50 shadow-2xl glow-effect">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12 text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12 text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Описание задачи</label>
                  <Textarea 
                    placeholder="Расскажите, какая помощь вам нужна..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-32 text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg glow-effect">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="Phone" size={24} className="mx-auto mb-2 neon-pink" />
                    <div className="font-semibold neon-pink">Телефон</div>
                    <div className="text-purple-300">+7 (999) 123-45-67</div>
                  </div>
                  <div>
                    <Icon name="Mail" size={24} className="mx-auto mb-2 neon-cyan" />
                    <div className="font-semibold neon-cyan">Email</div>
                    <div className="text-purple-300">info@muzhnachas.ru</div>
                  </div>
                  <div>
                    <Icon name="MapPin" size={24} className="mx-auto mb-2 neon-purple" />
                    <div className="font-semibold neon-purple">Адрес</div>
                    <div className="text-purple-300">г. Москва</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-black border-t border-purple-500/30 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wrench" size={24} className="neon-pink" />
                <span className="text-xl font-bold neon-pink">Муж на час</span>
              </div>
              <p className="text-purple-300">
                Профессиональные услуги по ремонту и обслуживанию вашего дома
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 neon-purple">Услуги</h3>
              <ul className="space-y-2 text-purple-300">
                <li>Мелкий ремонт</li>
                <li>Сантехника</li>
                <li>Электрика</li>
                <li>Сборка мебели</li>
                <li>Массаж</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 neon-cyan">Контакты</h3>
              <ul className="space-y-2 text-purple-300">
                <li>+7 (999) 123-45-67</li>
                <li>info@muzhnachas.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-purple-400">
            <p>© 2024 Муж на час. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;