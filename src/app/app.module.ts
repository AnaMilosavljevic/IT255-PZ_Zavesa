import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageService } from './PageService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RepertoarComponent } from './repertoar/repertoar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecommendationComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    RepertoarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
