# {{ .Site.Title }}
{{ $pages := where site.RegularPages "Type" "in" site.Params.mainSections }}
{{ i18n "archiveCounter" (len $pages) }}

{{ range $pages.GroupByPublishDate "2006" }}
  {{- if ne .Key "0001" -}}
    ## {{ .Key }}
    {{- range .Pages }}
      {{- $postPath := replace .File.Path " " "%20" }}
- {{ .PublishDate.Format "01-02" }} [{{ .Title }}](content/{{ $postPath }})
    {{- end }}
  {{- end }}
{{ end }}
