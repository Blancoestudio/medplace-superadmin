import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, public router: Router) { }

  setToken(token: string) { 
    localStorage.setItem('medplaceToken', token);
  }
  setProfile(profile:any) {
    localStorage.setItem('medplaceProfile', JSON.stringify(profile));
  }
  getProfile(data?:string) {
    let profile = JSON.parse(localStorage.getItem('medplaceProfile') || '');
    if (data) {
      return profile[data];
    } else {
      return profile;
    }
    
  }

  /* Masters */
  getProfiles() {
    return this.get('/v1/profile');
  }
  getShifttypes() {
    return this.get('/v1/shifttype');
  }

  /* Customer manager */
  getCustomerDashboard() {
    return this.get('/v1/customer/dashboard');
  }
  getCustomers() {
    return this.get('/v1/customer');
  }
  getCustomer(id:string) {
    return this.get('/v1/customer/' + id);
  }
  addCustomer(data:any){
    return this.post('/v1/customer', data);
  }
  editCustomer(data:any) {
    return this.post('/v1/customer/' + data._id, data);
  }
  removeCustomer(id:string) {
    return this.delete('/v1/customer/'+id);
  }
  

  /* Profile Management */
  getCustomerUsers() {
    return this.get("/v1/customer/users");
  }
  addUser(data:any){
    return this.post('/v1/user', data);
  }
  editUser(data:any) {
    return this.post('/v1/user/' + data._id, data);
  }
  removeUser(id:string) {
    return this.delete('/v1/user/'+id);
  }

  /* Shifts Management */
  getShifts() {
    return this.get("/v1/shift");
  }
  addShift(data:any){
    return this.post('/v1/shift', data);
  }
  editShift(data:any) {
    return this.post('/v1/shift/' + data._id, data);
  }
  removeShift(id:string) {
    return this.delete('/v1/shift/'+id);
  }

  /* Store management */
  uploadStoreImage(data: any) {
    return this.post('/v1/store/upload-image', data);
  }
  getStores() {
    return this.get('/v1/store');
  }
  addStore(data:any){
    return this.post('/v1/store', data);
  }
  editStore(data:any) {
    return this.post('/v1/store/' + data._id, data);
  }
  removeStore(id:string) {
    return this.delete('/v1/store/'+id);
  }
  
  /* User management */
  getUsers(){
    return this.get('/v1/user');
  }
  
  /* Jobs management */
  getJobs(){
    return this.get('/v1/job');
  }
  addJob(job: any){
    return this.post('/v1/job', job);
  }

  /* Auth services */
  login(data:any) {
    return this.post('/v1/auth/login', data);
  }
  register(data:any) {
    return this.post('/v1/auth/register', data);
  }
  lostpassword(data:any) {
    return this.post('/v1/auth/lost-password', data);
  }
  logout() {
    localStorage.removeItem('medplaceProfile');
    localStorage.removeItem('medplaceToken');
    this.router.navigateByUrl('/');
  }




  /* Injector */

  get(servicio: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+localStorage.getItem('medplaceToken') || '' });
    const o = { headers: headers }; 
    return this.http.get(environment.url + servicio, o);
  }

  post(servicio: string, request: any): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+localStorage.getItem('medplaceToken') || '' });
    const o = { headers: headers };
    return this.http.post(environment.url + servicio, request, o);
  }

  delete(servicio: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+localStorage.getItem('medplaceToken') || '' });
    const o = { headers: headers };
    return this.http.delete(environment.url + servicio, o);
  }

  public upload(url: string, file: File) {
    let formData = new FormData();
    formData.append('upload', file);
    let params = new HttpParams();
    const options = { headers: new HttpHeaders().append('Authorization', 'Bearer '+localStorage.getItem('medplaceToken') || '') };
    return this.http.post(environment.url+url, formData, options);
  }

  uploadImage(url: string, name: string, file: any) {
    let params = new HttpParams();
    const options = { headers: new HttpHeaders().append('Authorization', 'Bearer '+localStorage.getItem('medplaceToken') || '') };
    return this.http.post(environment.url+url, {
      name: name,
      file: file
    }, options);
  }
}
