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
delay(5e-6);


status(B);
delay(d2/2+1/sw1/2+p16+2*d16);      //a1=1/sw1/2+p16+2*d16;

/********************first sel 180° pulse***************/
delay(5e-6);
rgradient('z',inhz1);
delay(p16);
rgradient('z',0);
delay(5e-6);

rgradient('z',Gz);
delay(5e-6);
obsoffset(tof);
obspower(selpwr);
shaped_pulse(selpat,selpw,0,rof1,rof1);
delay(5e-6);
rgradient('z',0);

delay(5e-6);
rgradient('z',inhz1);
delay(p16);
rgradient('z',0);
delay(5e-6);

delay(d2/2+1/sw1/2+p16+2*d16);       //a1=1/sw1/2+p16+2*d16;
/*************first hard 180° pulses************/
status(C);
delay(5e-6);
rgpulse(2*pw,0,rof1,rof1);
delay(5e-6);
delay(d2/2+1/sw1/4);     //a2=1/sw1/4;
/*************secend hard 180° pulses************/
delay(5e-6);
rgradient('z',inhz3/2);
delay(p16);
rgradient('z',0);
delay(5e-6);
rgpulse(2*pw,0,rof1,rof1);
delay(5e-6);
rgradient('z',-inhz3/2);
delay(p16);
rgradient('z',0);
delay(5e-6);

delay(1/sw/4+p16+2*d16);   //a3=1/sw/4+p16+2*d16;
/*************secend sel 180° pulses************/
rgradient('z',Gz);
delay(5e-6);
obsoffset(tof);
obspower(selpwr);
shaped_pulse(selpat,selpw,0,rof1,rof1);
delay(5e-6);
rgradient('z',0);

delay(5e-6);
rgradient('z',-inhz3);
delay(p16);
rgradient('z',0);
delay(5e-6);

delay(d2/2+p16+2*d16);   //a4=p16+2*d16;


/*************caiyangshijan************/
status(D);
}
