import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { NguCarouselModule } from '@ngu/carousel';

import { CommonDirectivesModule } from '../../directives/common/common-directives.module';
import { WINDOW_PROVIDERS } from '../../helpers/window.helper';
import { ContactComponent } from './contact/contact.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { IntroComponent } from './intro/intro.component';
import { PortfolioCarouselComponent } from './portfolio-carousel/portfolio-carousel.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingsComponent } from './pricings/pricings.component';
import { ServicesCarouselComponent } from './services-carousel/services-carousel.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsCarouselComponent } from './testimonials-carousel/testimonials-carousel.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FlexLayoutModule,
    NguCarouselModule,
    CommonDirectivesModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    IntroComponent,
    PortfolioComponent,
    ServicesComponent,
    CtaComponent,
    ImageDialogComponent,
    PricingsComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    PortfolioCarouselComponent,
    TestimonialsCarouselComponent,
    ServicesCarouselComponent
  ],
  entryComponents: [ImageDialogComponent],
  providers: [WINDOW_PROVIDERS]
})
export class HomeModule {}
