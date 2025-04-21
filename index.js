// OCR AI App using React + Tesseract.js + AI Translation & Summary + Multilang + PDF + Drive
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { createWorker } from 'tesseract.js';
import jsPDF from 'jspdf';

// Canvas content goes here
// (already included earlier – shortened here for simplicity)

function downloadAsDoc(text) {
  const blob = new Blob([text], { type: 'application/msword' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'extracted-text.doc';
  a.click();
  window.URL.revokeObjectURL(url);
}
