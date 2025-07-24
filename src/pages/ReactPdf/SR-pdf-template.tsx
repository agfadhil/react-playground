import { forwardRef } from "react";

interface SRItem {
  name: string;
  brand: string;
  description: string;
  stock: number | string;
  unit: string;
}

interface SRData {
  items: SRItem[];
}

interface SRPDFTemplateProps {
  data: SRData;
  currentDate: string;
  srNumber: string;
}

const SRPDFTemplate = forwardRef<HTMLDivElement, SRPDFTemplateProps>(
  ({ data, currentDate, srNumber }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: "absolute",
          left: "-9999px",
          top: "-9999px",
          width: "210mm",
          fontFamily: "Arial, sans-serif",
          fontSize: "12px",
          backgroundColor: "#ffffff",
          padding: "15px",
          lineHeight: "1.2",
          color: "#000000",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "2px solid #000000",
            }}
          >
            {/* Header Section */}
            <tr>
              <td
                rowSpan={3}
                colSpan={2}
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "12px",
                  verticalAlign: "middle",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
              >
                <img
                  src="../../assets/images/logo-triton.png"
                  alt="Company Logo"
                  style={{ maxWidth: "100px", maxHeight: "50px" }}
                />
              </td>
              <td
                rowSpan={3}
                colSpan={2}
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  verticalAlign: "middle",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  width: "45%",
                }}
              >
                SERVICE REQUISITION (SR)
              </td>
              <td
                colSpan={2}
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  textAlign: "right",
                  fontSize: "11px",
                  fontWeight: "bold",
                  verticalAlign: "middle",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  width: "40%",
                  height: "30px",
                }}
              >
                Form No. FRM/PNL/01/03
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  textAlign: "right",
                  fontSize: "11px",
                  fontWeight: "bold",
                  verticalAlign: "middle",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
              >
                Revision No. 003
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  textAlign: "right",
                  fontSize: "11px",
                  fontWeight: "bold",
                  verticalAlign: "middle",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
              >
                Update Doc.: 23 Juni 2023
              </td>
            </tr>

            {/* Vessel and SR Info Section */}
            <tr>
              <td
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  fontWeight: "bold",
                  fontSize: "12px",
                  width: "8%",
                  verticalAlign: "middle",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  height: "40px",
                }}
              >
                Vessel
              </td>
              <td
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  fontSize: "12px",
                  width: "25%",
                  verticalAlign: "middle",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
              >
                :{" "}
                <span
                  style={{
                    borderBottom: "1px solid #000",
                    display: "inline-block",
                    minWidth: "120px",
                    height: "15px",
                  }}
                ></span>
              </td>
              <td
                colSpan={2}
                rowSpan={2}
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "12px",
                  verticalAlign: "middle",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  width: "32.5%",
                }}
              >
                SR No. :{" "}
                <span
                  style={{
                    borderBottom: "1px solid #000",
                    display: "inline-block",
                    minWidth: "80px",
                    height: "15px",
                    marginTop: "3px",
                  }}
                >
                  {srNumber}
                </span>
              </td>
              <td
                colSpan={2}
                rowSpan={2}
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "12px",
                  verticalAlign: "middle",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  width: "32.5%",
                }}
              >
                SR Date :{" "}
                <span
                  style={{
                    borderBottom: "1px solid #000",
                    display: "inline-block",
                    minWidth: "80px",
                    height: "15px",
                    marginTop: "3px",
                  }}
                >
                  {currentDate}
                </span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  fontWeight: "bold",
                  fontSize: "12px",
                  verticalAlign: "middle",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
              >
                Dept
              </td>
              <td
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  fontSize: "12px",
                  verticalAlign: "middle",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
              >
                :{" "}
                <span
                  style={{
                    borderBottom: "1px solid #000",
                    display: "inline-block",
                    minWidth: "120px",
                    height: "15px",
                  }}
                ></span>
              </td>
            </tr>

            {/* Table Headers */}
            <tr>
              <td
                style={{
                  border: "1px solid #000000",
                  padding: "6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "#f5f5f5",
                  fontSize: "12px",
                  width: "8%",
                  color: "#000000",
                  verticalAlign: "middle",
                }}
              >
                No.
              </td>
              <td
                colSpan={3}
                style={{
                  border: "1px solid #000000",
                  padding: "6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "#f5f5f5",
                  fontSize: "12px",
                  width: "65%",
                  color: "#000000",
                  verticalAlign: "middle",
                }}
              >
                Description
              </td>
              <td
                style={{
                  border: "1px solid #000000",
                  padding: "6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "#f5f5f5",
                  fontSize: "12px",
                  width: "10%",
                  color: "#000000",
                  verticalAlign: "middle",
                }}
              >
                Qty
              </td>
              <td
                style={{
                  border: "1px solid #000000",
                  padding: "6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "#f5f5f5",
                  fontSize: "12px",
                  width: "10%",
                  color: "#000000",
                  verticalAlign: "middle",
                }}
              >
                Unit
              </td>
            </tr>

            {/* Data Rows */}
            {[...Array(12)].map((_, index) => {
              const item = data.items[index];
              return (
                <tr key={index}>
                  <td
                    style={{
                      border: "1px solid #000000",
                      padding: "4px",
                      textAlign: "center",
                      fontWeight: "bold",
                      verticalAlign: "middle",
                      height: "30px",
                      fontSize: "11px",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                    }}
                  >
                    {index + 1}
                  </td>
                  <td
                    colSpan={3}
                    style={{
                      border: "1px solid #000000",
                      padding: "4px",
                      textAlign: "left",
                      paddingLeft: "6px",
                      verticalAlign: "top",
                      height: "30px",
                      fontSize: "11px",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                    }}
                  >
                    {item ? `${item.name} - ${item.brand}` : ""}
                  </td>
                  <td
                    style={{
                      border: "1px solid #000000",
                      padding: "4px",
                      textAlign: "center",
                      verticalAlign: "middle",
                      height: "30px",
                      fontSize: "11px",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                    }}
                  >
                    {item ? item.stock : ""}
                  </td>
                  <td
                    style={{
                      border: "1px solid #000000",
                      padding: "4px",
                      textAlign: "center",
                      verticalAlign: "middle",
                      height: "30px",
                      fontSize: "11px",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                    }}
                  >
                    {item ? item.unit : ""}
                  </td>
                </tr>
              );
            })}

            {/* Signature Section */}
            <tr>
              <td
                colSpan={2}
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  verticalAlign: "top",
                  height: "80px",
                  position: "relative",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "4px",
                    fontSize: "11px",
                  }}
                >
                  Requested By
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "9px",
                    marginBottom: "15px",
                    lineHeight: "1.2",
                  }}
                >
                  C/E, C/O, Storeman / Office
                </div>
                <div style={{ height: "30px", marginBottom: "8px" }}></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "8px",
                    right: "8px",
                    fontSize: "10px",
                    textAlign: "left",
                  }}
                >
                  Date : <span>{currentDate}</span>
                </div>
              </td>
              <td
                colSpan={2}
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  verticalAlign: "top",
                  height: "80px",
                  position: "relative",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "4px",
                    fontSize: "11px",
                  }}
                >
                  Verified By
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "9px",
                    marginBottom: "15px",
                    lineHeight: "1.2",
                  }}
                >
                  Master / Tech Mgr, Dept Mgr
                </div>
                <div style={{ height: "30px", marginBottom: "8px" }}></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "8px",
                    right: "8px",
                    fontSize: "10px",
                    textAlign: "left",
                  }}
                >
                  Date : <span>{currentDate}</span>
                </div>
              </td>
              <td
                colSpan={2}
                style={{
                  border: "1px solid #000000",
                  padding: "8px",
                  verticalAlign: "top",
                  height: "80px",
                  position: "relative",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "4px",
                    fontSize: "11px",
                  }}
                >
                  (3) Approved By
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "9px",
                    marginBottom: "15px",
                    lineHeight: "1.2",
                  }}
                >
                  Head of Div
                </div>
                <div style={{ height: "30px", marginBottom: "8px" }}></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "8px",
                    right: "8px",
                    fontSize: "10px",
                    textAlign: "left",
                  }}
                >
                  Date : <span>{currentDate}</span>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
);

SRPDFTemplate.displayName = "SRPDFTemplate";

export default SRPDFTemplate;
