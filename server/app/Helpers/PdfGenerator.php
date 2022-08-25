<?php

namespace App\Helpers;

use Mpdf\Mpdf;
use App\Recipe;

class PdfGenerator
{
    public static function generatePDF($id)
    {
        $recipe = Recipe::with('ingredient', 'step', 'user')
            ->has('user')
            ->find($id);

        $hours = floor($recipe->time / 60);
        $minutes = $recipe->time % 60;
        $number = 1;

        if ($minutes == 0) {
            $cookTime = $hours.' Jam ';
        } else {
            $cookTime = $hours.' Jam '.$minutes.' Menit';
        }

        $mpdf = new Mpdf([
            'tempDir' => public_path('pdf'),
            'format' => 'A4',
            'margin_left' => 17,
            'margin_right' => 13,
            'margin_top' => 20,
            'margin_bottom' => 40,
            'margin_header' => 0,
            'margin_footer' => 13,
        ]);

        $mpdf->SetDisplayMode('fullpage');

        $pagecount = $mpdf->SetSourceFile(public_path().'/A5.pdf');
        $tplId = $mpdf->ImportPage($pagecount);
        $mpdf->SetPageTemplate($tplId);
        $mpdf->defaultfooterline = 0;
        $mpdf->defaultfooterfontsize = 9;
        $mpdf->setFooter('Page {PAGENO}');
        $mpdf->keepColumns = true;
        // Add a page
        $mpdf->AddPage();

        $html = '<style>
            table {
                border-collapse: collapse;
                border: 1px solid #ddd;

            }
            ul, li, p, span {
                font-family: helvetica;
            }
        </style>
        <table cellpadding="10" border="0" cellspacing="0"
            style="border: 1px solid #fff; border-bottom: 4px solid red;" >
            <tr class="recipe">
                <td width="40%">';
                
        if ($recipe->image) {
            $html .= '<img src="'.$recipe->image.'" style="width:50%">';
        } else {
            $html .= '<img src="" style="width:50%">';
        }

        $html .= '</td>
                <td width="60%">
                    <p align="left" valign="top">
                        <span style="font-size: 34px;color: red;">'.$recipe->name.'</span>
                        <br /><br />
                        <span style="font-size: 20px">'.$recipe->description.'</span>
                        <br /><br />
                    </p>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 1px solid #fff;">
                        <tr class="inside-table">
                            <td width="33%">
                                <span style="font-size: 16px">
                                <strong>By '.$recipe->user->fullname.'</strong>
                                </span>
                            </td>
                            <td width="33%" style="padding:11px">
                                <span style="font-size: 16px">
                                <img src="'.public_path().'/icon-person.png" style="width:15px">
                                <strong>Porsi '.$recipe->portion.' Org</strong></span>
                            </td>
                            <td width="33%" style="padding:13px">
                                <span style="font-size: 16px">
                                <img src="'.public_path().'/icon-time.png" style="width:15px">
                                <strong>'.$cookTime.'</strong></span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <p><span style="color: red;"><strong>Persiapkan Bahan-bahan</strong></span></p>
        <span style="color: red;"><strong>Bahan Utama</strong></span>';

        $html .= '<columns column-count="2" vAlign="J" column-gap="7" /><div class="columngap"><ul>';

        foreach ($recipe->ingredient as $ing) {
            if ($ing->type == 'ingredient') {
                $html .= '<li>'.$ing->ingredient.'</li>';
            } elseif ($ing->type == 'group') {
                $html .= '</ul><span style="color: red;"><strong>'.$ing->ingredient.'</strong></span><br /><ul>';
            }
        }
        $html .= '</ul></div></columns><pagebreak />';

        $html .= '<p align="left"><span style="font-size: 20px;color: red;">
        <strong>Mulai Memasak</strong></span></p>
        <columns column-count="2" vAlign="J" column-gap="7" class="columngap" />
        <table style="padding:10px;" cellpadding="10" border="0" cellspacing="0">';

        foreach ($recipe->step as $index => $step) {
            $html .= '<tr>';

            if ($index == 0 || $index == 1 || $index == 4 || $index == 5) {
                $html .= '<td
                    style="height: 400px; border: 1px solid #fff; border-right: 1px solid red;" vertical-align="top">';
            } else {
                $html .= '<td style="height: 400px; border: 1px solid #fff;" vertical-align="top">';
            }

            if ($step->image) {
                $html .= '<p><img src="'.$step->image.'" style="width:90%"></p><br />';
            } else {
                $html .= '<p><img src="" style="width:90%"></p><br />';
            }

            $html .= '<p><span style="color: red;">Step '.$number.'</span></p>
                    <p align="left" >
                        <span style="font-size: 16px;">'.$step->description.'</span>
                    </p>
                </td>
            </tr>';
            $number++;
        }

        $html .= '</table></columns>';

        // output the HTML content
        $mpdf->writeHTML($html);

        $pathname = preg_replace('/\s+/', '_', $recipe->name);
        // Close and output PDF document
        // This method has several options, check the source code documentation for more information.
        // $mpdf->Output($recipe->name.'.pdf', 'I');
        $mpdf->Output(public_path('pdfdump').'/'.$pathname.'.pdf', "F");

        return public_path('pdfdump').'/'.$pathname.'.pdf';
    }
}
