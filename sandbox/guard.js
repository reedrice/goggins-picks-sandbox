// Loaded before all application scripts by the sandbox server only.
(() => {
 // GitHub Pages projects share an origin: isolate every storage key explicitly.
 for (const name of ['localStorage','sessionStorage']) {
  const native=window[name], prefix='brandon-picks-sandbox:';
  const keys=()=>Array.from({length:native.length},(_,i)=>native.key(i)).filter(k=>k && k.startsWith(prefix));
  const scoped={getItem:k=>native.getItem(prefix+k),setItem:(k,v)=>native.setItem(prefix+k,String(v)),removeItem:k=>native.removeItem(prefix+k),clear:()=>keys().forEach(k=>native.removeItem(k)),key:i=>keys()[i]?.slice(prefix.length)||null,get length(){return keys().length;}};
  Object.defineProperty(window,name,{value:scoped,configurable:false});
 }
 const fetchRead=window.fetch.bind(window);
 window.fetch=(input,options={})=>{
  const method=String(options.method||(input instanceof Request?input.method:'GET')).toUpperCase();
  if(!['GET','HEAD'].includes(method))return Promise.reject(new Error('Sandbox: external writes are disabled'));
  return fetchRead(input,options);
 };
 const open=XMLHttpRequest.prototype.open;
 XMLHttpRequest.prototype.open=function(method,...rest){
  if(!['GET','HEAD'].includes(String(method).toUpperCase()))throw new Error('Sandbox: external writes are disabled');
  return open.call(this,method,...rest);
 };
 navigator.sendBeacon=()=>false;
 document.addEventListener('submit',event=>event.preventDefault(),true);
 document.addEventListener('DOMContentLoaded',()=>{
  const notice=document.createElement('div');notice.textContent='BRANDON SANDBOX - experiments only - shared writes disabled';
  notice.style.cssText='background:#ffe066;color:#111;padding:10px;text-align:center;font:600 13px system-ui;position:relative;z-index:10000';
  document.body.prepend(notice);
 });
})();
