import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MRPDFTemplate from "./MR-pdf-template";

const data = {
  items: [
    {
      id: "WF2076",
      name: "COOLANT FILTER",
      brand: "FLEETGUARD",
      category: "coolant-filter",
      equipment: "fleetguard",
      code: "WF2076",
      description: "High-efficiency coolant filter for heavy machinery",
      stock: 150,
      unit: "pcs",
    },
    {
      id: "FC1005",
      name: "FUEL FILTER",
      brand: "SAKURA",
      category: "fuel-filter",
      equipment: "sakura",
      code: "FC1005",
      description: "Premium fuel filtration system",
      stock: 200,
      unit: "pcs",
    },
    {
      id: "FR2504",
      name: "AIR FILTER",
      brand: "FHAS",
      category: "air-filter",
      equipment: "fhas",
      code: "FR2504",
      description: "High-performance air filtration",
      stock: 100,
      unit: "pcs",
    },
  ],
};

const ReactPdf = () => {
  const pdfRef = useRef<HTMLDivElement>(null);
  const [showData, setShowData] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string>("");

  const handleShowData = () => {
    setShowData(!showData);
    console.log("Show data in PDF format", data);
  };

  const handlePreview = async () => {
    const element = pdfRef.current;
    if (!element) return;

    try {
      // Wait a bit for styles to load completely
      await new Promise((resolve) => setTimeout(resolve, 100));

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
        logging: false,
        foreignObjectRendering: false,
        ignoreElements: (element) => {
          // Skip elements that might cause color parsing issues
          return element.tagName === "STYLE" || element.tagName === "LINK";
        },
        onclone: (clonedDoc) => {
          // Remove all external stylesheets that might contain unsupported colors
          const links = clonedDoc.querySelectorAll("link[rel='stylesheet']");
          links.forEach((link) => link.remove());

          // Remove any style elements that might contain problematic CSS
          const styles = clonedDoc.querySelectorAll("style");
          styles.forEach((style) => {
            if (style.textContent && style.textContent.includes("oklch")) {
              style.remove();
            }
          });
        },
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 5;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );

      // Create blob URL for preview in dialog
      const pdfBlob = pdf.output("blob");
      const generatedPdfUrl = URL.createObjectURL(pdfBlob);

      setPdfUrl(generatedPdfUrl);
      setDialogOpen(true);

      console.log("PDF preview generated successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "material-requisition.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    // Clean up the URL to prevent memory leaks
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl("");
    }
  };

  const currentDate = new Date().toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const mrNumber =
    "MR" +
    new Date().getFullYear() +
    Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");

  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Feature - Render data to PDF</CardTitle>
          <CardDescription>
            format html with table rendered to PDF and preview
          </CardDescription>
          <CardAction>
            <Button onClick={handleShowData} variant={"link"}>
              {showData ? "Hide Data" : "Show Data"}
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          {showData && (
            <div className="mb-4 p-4 bg-gray-50 rounded">
              <h5 className="font-semibold mb-2">Data Preview:</h5>
              {data.items.map((item, index) => (
                <div key={item.id} className="text-sm mb-1">
                  {index + 1}. {item.name} ({item.brand}) - {item.stock}{" "}
                  {item.unit}
                </div>
              ))}
            </div>
          )}

          {/* Hidden PDF Template Component */}
          <MRPDFTemplate
            data={data}
            currentDate={currentDate}
            mrNumber={mrNumber}
            ref={pdfRef}
          />

          <p>
            Click the button below to generate and preview Material Requisition
            PDF.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handlePreview}>Preview PDF</Button>
        </CardFooter>
      </Card>

      {/* PDF Preview Dialog */}
      <Dialog open={dialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle>PDF Preview - Material Requisition</DialogTitle>
            <DialogDescription>
              Preview your Material Requisition document. You can download it
              using the button below.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-hidden">
            {pdfUrl && (
              <iframe
                src={pdfUrl}
                className="w-full h-[60vh] border rounded"
                title="PDF Preview"
              />
            )}
          </div>

          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={handleDialogClose}>
              Close
            </Button>
            <Button onClick={handleDownload}>Download PDF</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ReactPdf;
