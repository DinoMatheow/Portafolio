import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TECH_DATA } from '../../../data/tech.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './techCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './techCard.component.css',
})
export class TechCardComponent {
  techData = signal(TECH_DATA);

  getIconStyle(index: number, total: number) {
    const radius = 120; // Radio del círculo en píxeles. ¡Puedes ajustarlo!
    // Distribuir los íconos equitativamente. Empezamos desde arriba (-90 grados).
    const angle = -90 + (index * (360 / total));
    const angleInRad = angle * (Math.PI / 180); // Convertir a radianes

    const x = radius * Math.cos(angleInRad);
    const y = radius * Math.sin(angleInRad);

    return {
      // Posiciona el centro del elemento en el centro del contenedor, y luego lo traslada
      'top': `calc(50% + ${y}px)`,
      'left': `calc(50% + ${x}px)`,
      // Translada en -50% del tamaño del propio elemento para un centrado perfecto
      'transform': 'translate(-50%, -50%)',
    };
  }
}
