import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { TableComponent } from './components/table/table.component';
import { CurrencyExchangePipe } from './pipes/currency-exchange/currency-exchange.pipe';

@NgModule({
  declarations: [
    MainHomeComponent,
    FooterComponent,
    HeaderComponent,
    TableComponent,
    CurrencyExchangePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ],
  providers: [CurrencyPipe]
})
export class HomeModule { }
