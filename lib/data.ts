import { createClient } from '@supabase/supabase-js';
export type EventItem = { id:string; title:string; slug:string; description:string; date:string; location:string|null; poster_url:string|null; registration_url:string|null; status:'upcoming'|'past'; featured:boolean; sessions?: Session[]; gallery?: string[] };
export type Session = { id:string; event_id:string; title:string; description:string; speaker_name:string|null; speaker_title:string|null; speaker_photo:string|null; speaker_link:string|null; sort_order:number };
export function supabaseServer(){
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL; const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
 if(!url||!key) return null;
 return createClient(url,key,{auth:{persistSession:false}});
}
export async function getEvents(status?:'upcoming'|'past'):Promise<EventItem[]> {
 const db=supabaseServer(); if(!db) return [];
 let q=db.from('events').select('*, sessions(*), gallery(*)').order('date',{ascending:status==='past'});
 if(status) q=q.eq('status',status);
 const {data}=await q;
 return (data||[]).map((e:any)=>({...e,gallery:(e.gallery||[]).sort((a:any,b:any)=>a.sort_order-b.sort_order).map((g:any)=>g.image_url)}));
}
