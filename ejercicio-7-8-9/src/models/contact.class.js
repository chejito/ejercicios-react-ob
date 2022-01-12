export class Contact {
  name = ''
  email = '' 
  phoneNumber = ''
  connected = false

  constructor(name, email, phoneNumber, connected) {
    this.name = name
    this.email = email
    this.phoneNumber = phoneNumber
    this.connected = connected
  }
}