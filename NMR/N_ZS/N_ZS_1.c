#ifndef LINT
static char SCCSid[] = "@(#)s2pul.c 19.1 01/13/06 Copyright (c) 1991-1996 Varian Assoc.,Inc. All Rights Reserved";
#endif
/* --- create by zcq 2017-11-15--- */
/*  s2pul - standard two-pulse sequence */

#include <standard.h>

pulsesequence()
{
	double selpwr,selpw,seltof,dd,Gz,inhz1,inhz3,p16,d16;	char   selpat[MAXSTR];
	selpwr = getval("selpwr");
	selpw  = getval("selpw");
	seltof = getval("seltof");
	getstr("selpat",selpat);
	Gz      = getval("Gz");
	inhz1   = getval("inhz1");
   inhz3   = getval("inhz3");
	//a1 = getval("a1");
	//a2 = getval("a2");
	//a3 = getval("a3");
	//a4 = getval("a4");
	p16 = getval("p16");
	d16 = getval("d16");
	dd = getval("dd");
	

/* equilibrium period */
status(A);
assign(zero,oph);
delay(d1);

/* --- tau delay --- */
   
/* --- first hard 90° pulse --- */
obspower(tpwr);
obsoffset(tof);
rgpulse(pw,0,rof1,rof1);
//delay(d16);


status(B);
delay(d2/2+dd);      //a1=dd/2+p16+2*d16;
//delay(pw+p16/2+2.5e-6);     //delay for the same time
/********************first sel 180° pulse***************/
delay(d16);
rgradient('z',inhz1);
delay(p16);
rgradient('z',0);
delay(d16);

rgradient('z',Gz);
delay(5e-6);                    //delay for sel 180° pulse
obsoffset(seltof);
obspower(selpwr);
shaped_pulse(selpat,selpw,0,rof1,rof1);
delay(5e-6);
rgradient('z',0);

delay(d16);
rgradient('z',inhz1);
delay(p16);
rgradient('z',0);
delay(d16);

//delay(pw+p16/2+2.5e-6);      //delay for the same time
delay(d2/2+dd);      //a1=dd/2+p16+2*d16;
//delay(d16);      
/*************first hard 90° pulses************/
status(C);
//delay(5e-6);
obsoffset(tof);
obspower(tpwr);
rgpulse(pw,0,rof1,rof1);
//delay(5e-6);            //does it need?
delay(d2/2+dd/2-p16-2*d16);     //a2=dd/2;
/*************secend hard 180° pulses************/
delay(d16);
rgradient('z',inhz3/2);
delay(p16);
rgradient('z',0);
delay(d16);
rgpulse(2*pw,0,rof1,rof1);
delay(dd/2); 

delay(d16);
rgradient('z',-inhz3/2);
delay(p16);
rgradient('z',0);
delay(d16);

/*************second sel 180° pulses************/
rgradient('z',Gz);
delay(5e-6);
obsoffset(seltof);
obspower(selpwr);
shaped_pulse(selpat,selpw,0,rof1,rof1);
delay(5e-6);
rgradient('z',0);

delay(d16);
rgradient('z',-inhz3);
delay(p16);
rgradient('z',0);
delay(d16);
obsoffset(tof);
obspower(tpwr);
delay(d2/2);   //a4=p16+2*d16;
delay(5e-6);

/*************caiyangshijan************/
status(D);
}
