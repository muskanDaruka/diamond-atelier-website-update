import React from "react";
import { motion } from "framer-motion";

const Table = ({ tableData }) => {
    return (
        <div className="p-6">
            {tableData.map(({ headers, rows, colSpans, title }, tableIndex) => (
                <motion.div
                    key={tableIndex}
                    className="overflow-x-auto max-w-full  mt-4 border border-[#777678]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: tableIndex * 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full">
                        <table className=" min-w-max w-full border border-[#777678] text-white text-sm font-montserrat">
                            <thead>
                                {headers.map((headerRow, rowIndex) => (
                                    <tr key={rowIndex} className="bg-[#777678] text-left">
                                        {headerRow.map((header, colIndex) => (
                                            <th
                                                key={colIndex}
                                                className="p-3 border border-[#6b6d69] text-center"
                                                rowSpan={colSpans?.rowSpan?.[rowIndex]?.[colIndex] || 1}
                                                colSpan={colSpans?.colSpan?.[rowIndex]?.[colIndex] || 1}
                                            >
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody className="bg-white text-center font-montserrat">
                                {rows.map((row, rowIndex) => (
                                    <tr key={rowIndex} className="border border-[#777678]">
                                        {row.map((cell, colIndex) => (
                                            <td
                                                key={colIndex}
                                                className={`p-3 border border-[#777678] ${
                                                    colIndex === 0 ? "text-[#6b6d6d]" : "bg-black text-white"
                                                }`}
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Table;
