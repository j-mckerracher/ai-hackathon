import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TeamMember {
  id: number;
}

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  teamName = '';
  university = '';
  leadEmail = '';
  members: TeamMember[] = [];
  maxMembers = 2;
  submitted = false;
  submitError = false;

  addMember(): void {
    if (this.members.length >= this.maxMembers) return;
    this.members.push({ id: this.members.length + 1 });
  }

  removeMember(id: number): void {
    this.members = this.members.filter(m => m.id !== id);
  }

  submitForm(): void {
    if (!this.teamName.trim() || !this.university.trim() || !this.leadEmail.trim()) {
      this.submitError = true;
      setTimeout(() => { this.submitError = false; }, 2200);
      return;
    }
    this.submitted = true;
    setTimeout(() => {
      document.getElementById('successMsg')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  }
}
